// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const UsuarioComum = require('./UsuarioComum');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const Publicacao = connection.define(
    'tblPublicacoes',
    {
        idPublicacao:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: sequelize.STRING(64),
            allowNull: false
        },
        descricao:{
            type: sequelize.TEXT,
            allowNull: false
        },
        imagem:{
            type: sequelize.STRING(255),
            allowNull: false
        },
    },
    {
        timestamps: false,
    });

    
    
    Publicacao.belongsTo(UsuarioComum);  
    UsuarioComum.hasMany(Publicacao);


 


//Publicacao.sync({force:true}); 

module.exports = Publicacao;