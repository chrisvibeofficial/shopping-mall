// Local hosting
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('user_address_book', 'root', '@Chrisvibe070697000', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// module.exports = sequelize

// Global hosting
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql8759379', 'sql8759379', 'x4njfdipLh', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize