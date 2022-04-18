// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const UsuarioComum = require('./UsuarioComum');
const Publicacao = require('./Publicacao');


/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const Resposta = connection.define(
    'tblRespostas',
    {
        idResposta:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        verificacao:{
            type: sequelize.BOOLEAN,
            allowNull: true
        },
        descricao:{
            type: sequelize.TEXT,
            allowNull: false
        },
        imagem:{
            type: sequelize.STRING(255),
            allowNull: true
        },
        dataHora:{
            type: sequelize.DATE,
            allowNull: false
        },
        // idUsuarioComum:{
        //     type: sequelize.INTEGER,
        //     allowNull: false,
        //     references: {model: 'tblUsuarioComums', key: 'idUsuarioComum'},
        //     onUpdate: 'CASCADE',
        //     onDelete: 'CASCADE',
        // },
        // idPublicacao:{
        //     type: sequelize.INTEGER,
        //     allowNull: false,
        //     references: {model: 'tblPublicacaos', key: 'idPublicacao'},
        //     onUpdate: 'CASCADE',
        //     onDelete: 'CASCADE',
        // },
    },
    {
        timestamps: false,
    });

    Resposta.belongsTo(UsuarioComum);
    UsuarioComum.hasMany(Resposta);
    


    Resposta.belongsTo(Publicacao);
    Publicacao.hasMany(Resposta);
    


//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//Resposta.sync({force:true}); 

module.exports = Resposta;