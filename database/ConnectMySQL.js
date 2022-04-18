
const sequelize = require('sequelize');

const connection = new sequelize(
    "back",
    "root",
    "12345678",
    {
        host: "localhost",
        dialect: "mysql",
        timezone: '-03:00'
    }
);

connection.authenticate().then(()=>{
    console.log("Sucess database connection");
}).catch((error)=>{
    console.log(error || "Failed database connection");
});

module.exports = connection;