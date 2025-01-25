const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize')

class addressInfo extends Model {}

addressInfo.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    userId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: 'userinfo',
        key: 'id'
      }
    },
    street: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'addressinfo', // We need to choose the model name
    tableName: 'addressinfos',
    timestamps: true
  },
);


module.exports = addressInfo;






// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class addressInfo extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   addressInfo.init({
//     userId: DataTypes.STRING,
//     street: DataTypes.STRING,
//     city: DataTypes.STRING,
//     state: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'addressInfo',
//   });
//   return addressInfo;
// };