// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const UsuarioComum = require('./UsuarioComum');
const Resposta = require('./Resposta');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const ElogioResposta = connection.define(
    'tblElogiosRespostas',
    {
        idElogioResposta:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        dataHora:{
            type: sequelize.DATE,
            allowNull: false
        },
        idUsuarioComum:{
            type: sequelize.INTEGER,
            allowNull: false,
            references: {model: 'tblUsuarioComums', key: 'idUsuarioComum'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        idResposta:{
            type: sequelize.INTEGER,
            allowNull: false,
            references: {model: 'tblResposta', key: 'idResposta'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
    },
    {
        timestamps: false,
    });

//Estabelece a chave estrangeira
// ElogioResposta.hasMany(UsuarioComum,{
//     foreignKey:{
//         name: "idUsuario"
//     }
// });

// ElogioResposta.hasMany(Resposta,{
//     foreignKey:{
//         name: "idResposta"
//     }
// });

//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//ElogioResposta.sync({force:true}); 

module.exports = ElogioResposta;