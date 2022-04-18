// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');


// Importa a model que trará a FK
const Curso = require('./Curso');
const UsuarioComum = require('./UsuarioComum');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const UsuarioCurso = connection.define(
    'tblUsuariosCursos',
    {
        idUsuarioCurso:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        timestamps: false,
    });


    //Estabelece a chave estrangeira
UsuarioCurso.hasMany(Curso);
UsuarioCurso.hasMany(UsuarioComum);


//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//UsuarioCurso.sync({force:true}); 

module.exports = UsuarioCurso;