// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');


// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const Curso = require('./Curso');
const Materia = require('./Materia');
/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const CursoMateria =  connection.define(
    'tblCursosMaterias',
    {
        idCursoMateria:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
       /* idCurso:{
            type: sequelize.INTEGER,
            allowNull: false,
            references: {model: 'tblCursos', key: 'idCurso'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        idMateria:{
            type: sequelize.INTEGER,
            allowNull: false,
            references: {model: 'tblMateria', key: 'idMateria'},
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }, */
    },
    {
        timestamps: false,
    });

Curso.belongsToMany(Materia, { through: CursoMateria });
CursoMateria.belongsTo(Curso);

Materia.belongsToMany(Curso, { through: CursoMateria });
CursoMateria.belongsTo(Materia);




//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//CursoMateria.sync({force:true}); 

module.exports = CursoMateria;