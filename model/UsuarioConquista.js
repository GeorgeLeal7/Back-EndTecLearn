// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const Conquista = require('./Conquista');
const UsuarioComum = require('./UsuarioComum');


/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const UsuarioConquista = connection.define(
    'tblUsuariosConquistas',
    {
        idUsuarioConquista:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        timestamps: false,
    });

//Estabelece a chave estrangeira
UsuarioConquista.hasMany(Conquista,{
        foreignKey:{
            name: "idConquista"
        }
    });

UsuarioConquista.hasMany(UsuarioComum,{
        foreignKey:{
            name: "idUsuario"
        }
    });

//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//UsuarioConquista.sync({force:true});

module.exports = UsuarioConquista;