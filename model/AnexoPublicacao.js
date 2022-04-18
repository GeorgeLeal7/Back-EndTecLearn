// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const Publicacao = require('./Publicacao');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const AnexoPublicacao = connection.define(
    'tblAnexoPublicacoes',
    {
        idAnexoPublicacao:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        anexo:{
            type: sequelize.STRING(510),
            allowNull: false
        }
    },
    {
        timestamps: false,
    });

//     Publicacao.hasMany(AnexoPublicacao); 
//     AnexoPublicacao.belongsTo(Publicacao);


//  AnexoPublicacao.hasMany(Publicacao);
//  Publicacao.belongsTo(AnexoPublicacao);

//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//AnexoPublicacao.sync({force:true}); 

module.exports = AnexoPublicacao;