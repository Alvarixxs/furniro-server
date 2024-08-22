const { DataTypes } = require('sequelize')

module.exports = {
  up: async ({ context: queryInterface }) => {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      excerpt: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_src: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      new: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      }
    })
  },
  down: async ({ context: queryInterface }) => {
    await queryInterface.dropTable('products')
  },
}