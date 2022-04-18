// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

const Categoria = require('./Categoria');
const Publicacao = require('./Publicacao');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const PublicacaoCategoria = connection.define(
    'tblPublicacoesCategorias',
    {
        idPublicacaoCategoria:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        // idPublicacao:{
        //     type: sequelize.INTEGER,
        //     allowNull: false,
        //     references: {model: 'tblPublicacoes', key: 'idPublicacao'},
        //     onUpdate: 'CASCADE',
        //     onDelete: 'CASCADE',
        // },
        // idCategoria:{
        //     type: sequelize.INTEGER,
        //     allowNull: false,
        //     references: {model: 'tblCategorias', key: 'idCategoria'},
        //     onUpdate: 'CASCADE',
        //     onDelete: 'CASCADE',
        // },
    },
    {
        timestamps: false,
    });

  
    Publicacao.belongsToMany(Categoria, {through: PublicacaoCategoria });
    PublicacaoCategoria.belongsTo(Publicacao);

    Categoria.belongsToMany(Publicacao, {through: PublicacaoCategoria });
    PublicacaoCategoria.belongsTo(Categoria);

    

//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//PublicacaoCategoria.sync(); 

module.exports = PublicacaoCategoria;