'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING(191),
    email: DataTypes.STRING(191),
    password: DataTypes.STRING(191),
    createdAt: {
      type :'TIMESTAMP',
      field: 'created_at'
    },
    updatedAt: {
      type :'TIMESTAMP',
      field: 'updated_at'
    },
    deleted_at: 'TIMESTAMP'
  }, {
    sequelize,
    modelName: 'User',
    tableName:'users'
  });
  return User;
};