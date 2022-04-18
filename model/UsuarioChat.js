// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');


// Importa a model que trará a FK
const UsuarioComum = require('./UsuarioComum');
const Chat = require('./Chat');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const UsuarioChat = connection.define(
    'tblUsuariosChats',
    {
        idUsuarioChat:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        timestamps: false,
    });

//Estabelece a chave estrangeira
UsuarioChat.hasMany(UsuarioComum,{
    foreignKey:{
        name: "idUsuario"
    }
});

UsuarioChat.hasMany(Chat,{
    foreignKey:{
        name: "idChat"
    }
});


//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//UsuarioChat.sync({force:true}); 

module.exports = UsuarioChat;