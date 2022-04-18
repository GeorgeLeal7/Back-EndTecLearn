const sequelize = require('sequelize');
const connection = require('../database/ConnectMySQL');


// Importa a model que trará a FK
const UsuarioComum = require('./UsuarioComum');
const Publicacao = require('./Publicacao');


const CurtidaPublicacao = connection.define(
    'tblCurtidasPublicacoes',
    {
        idCurtidaPublicacao:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        dataHora:{
            type: sequelize.DATE,
            allowNull: false
        }
    },
    {
        timestamps: false,
    });

CurtidaPublicacao.hasMany(UsuarioComum,{
    foreignKey:{
        name: "idUsuario"
    }
});

CurtidaPublicacao.hasMany(Publicacao,{
    foreignKey:{
        name: "idPublicacao"
    }
});



    //CurtidaPublicacao.sync({force:true});

module.exports = CurtidaPublicacao;