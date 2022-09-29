'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(191)
      },
      created_at: {
        allowNull: false,
        type: 'TIMESTAMP'
      },
      updated_at: {
        allowNull: true,
        type: 'TIMESTAMP'
      },
      deleted_at: {
        allowNull: true,
        type: 'TIMESTAMP'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};