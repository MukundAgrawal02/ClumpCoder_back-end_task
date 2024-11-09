const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('certificateDB', 'root', 'mukund2004', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
