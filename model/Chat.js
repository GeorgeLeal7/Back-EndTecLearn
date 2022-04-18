// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const Chat = connection.define(
    'tblChats',
    {
        idChat:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        timestamps: false,
    });

//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//Chat.sync({force:true}); 

module.exports = Chat;