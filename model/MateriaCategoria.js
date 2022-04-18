// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const Materia = require('./Materia');
const Categoria = require('./Categoria');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const MateriaCategoria = connection.define(
    'tblMateriasCategorias',
    {
        idMateriaCategoria:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        
        idMateria:{
            type: sequelize.INTEGER,
            allowNull: false,
            references: {model: 'tblMateria', key: 'idMateria'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        
        idCategoria:{
            type: sequelize.INTEGER,
            allowNull: false,
            references: {model: 'tblCategoria', key: 'idCategoria'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        
    },
    {
        timestamps: false,
    });



//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//MateriaCategoria.sync({force:true}); 

module.exports = MateriaCategoria;