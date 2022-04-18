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

const DenunciaCategoria = connection.define(
    'tblDenunciasCategorias',
    {
        idDenunciaCategoria:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        categoria:{
            type: sequelize.STRING(45),
            allowNull: false
        }
    },
    {
        timestamps: false,
    });



//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//DenunciaCategoria.sync({force:true}); 

module.exports = DenunciaCategoria;