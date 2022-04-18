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

const Usuario = connection.define(
    'tblUsuarios',
    {
        idUsuario:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        email:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        senha:{
            type: sequelize.STRING(50),
            allowNull: false
        },
        status:{
            type: sequelize.BOOLEAN,
            allowNull: false
        },
        classificacao:{
            type: sequelize.ENUM({
                values: ['administrador', 'professor', 'aluno', 'root']  //alterar e acrescentar aluno moderador, aluno comum,
                })
        }
    },
    {
        timestamps: false,
    });



//Usuario.sync({force:true});


module.exports = Usuario;