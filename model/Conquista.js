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

const Conquista = connection.define(
    'tblConquistas',
    {
        idConquista:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: sequelize.STRING(16),
            allowNull: false
        },
        emblema:{
            type: sequelize.STRING(255),
            allowNull: false
        },
        previa:{
            type: sequelize.STRING(100),
            allowNull: true
        }
    },
    {
        timestamps: false,
    });



//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
 //Conquista.sync({force:true}); 

module.exports = Conquista;