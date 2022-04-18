// Importa o módulo do SEQUELIZE 
const sequelize = require('sequelize');

// Importa o arquivo de conexão
const connection = require('../database/ConnectMySQL');
const Usuario = require('./Usuario');



/* 
    Cria a representação da tabela de usuários seus campos, tipos e regras.

Parametros:
1 - Nome da Tabela 
2 - Estrutura dos campos (Nome do campo campo, tipo e regras). - Json
*/

const UsuarioComum = connection.define(
    'tblUsuariosComuns',
    {
        idUsuarioComum:{
            type: sequelize.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        apelido:{
            type: sequelize.STRING(16),
            allowNull: false
        },
        foto:{
            type: sequelize.STRING(500),
            allowNull: false
        },
        biografia:{
            type: sequelize.STRING(255),
            allowNull: true
        },
        pontuacao:{
            type: sequelize.INTEGER(6),
            allowNull: false
        },
        moderador:{
            type: sequelize.BOOLEAN,
            allowNull: false
        },
        reputacao:{
            type: sequelize.INTEGER(3),
            allowNull: false
        
        },
    },
    {
        timestamps: false,
    });


Usuario.hasOne(UsuarioComum); 
UsuarioComum.belongsTo(Usuario);

 



//Comando que vai criar a tabela
//sync vai sincronizar o mapeamento

//UsuarioComum.sync({force:true});

module.exports = UsuarioComum;