const {v4: uuidv4} = require('uuid')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userinfos', [
      {
        id: uuidv4(),
        userId: '8abfb602-a819-4c3d-98c5-01ff49bfa14f',
        street: 'Oluwa streed',
        city: 'Aj',
        state: 'Lagos',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userinfos', null, {});
  },
};