const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('user_address_book', 'root', '@Chrisvibe070697000', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize