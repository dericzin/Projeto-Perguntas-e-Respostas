const sequelize = require('sequelize');

const connection = new sequelize('guiaperguntas','root','Milly2021',{
    host: 'localhost', 
    dialect: 'mysql',
    logging: false 
}); 

module.exports = connection;