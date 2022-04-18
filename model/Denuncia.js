// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');

// Importa a model que trará a FK
const UsuarioComum = require('./UsuarioComum');
const Resposta = require('./Resposta');
const Publicacao = require('./Publicacao');
const DenunciaCategoria = require('./DenunciaCategoria');

/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const Denuncia = connection.define(
    'tblDenuncias',
    {
        idDenuncia:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        descricao:{
            type: sequelize.TEXT,
            allowNull: false
        },
        idDenunciado:{
            type: sequelize.INTEGER(6),
            allowNull: false
        }
    },
    {
        timestamps: false,
    });

//Estabelece a chave estrangeira
Denuncia.hasMany(DenunciaCategoria,{
    foreignKey:{
        name: "idDenunciaCategoria"
    }
});

Denuncia.hasMany(UsuarioComum,{
    foreignKey:{
        name: "idUsuario"
    }
});

Denuncia.hasMany(Resposta,{
    foreignKey:{
        name: "idResposta"
    }
});

Denuncia.hasMany(Publicacao,{
    foreignKey:{
        name: "idPublicacao"
    }
});


//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento
//Denuncia.sync({force:true}); 

module.exports = Denuncia;