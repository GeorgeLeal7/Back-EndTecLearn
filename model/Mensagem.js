// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const Chat = require('./Chat');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const Mensagem = connection.define(
    'tblMensagems',
    {
        idMensagem:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        dataHora:{
            type: sequelize.DATE,
            allowNull: false
        },
        texto:{
            type: sequelize.TEXT,
            allowNull: false
        },
        idUsuario:{
            type: sequelize.INTEGER(6),
            allowNull: false
        }
    },
    {
        timestamps: false,
    });


//Estabelece a chave estrangeira
Mensagem.hasMany(Chat,{
    foreignKey:{
        name: "idChat"
    }
});


//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//Mensagem.sync({force:true}); 

module.exports = Mensagem;