const { Model, DataTypes } = require('sequelize')

const { sequelize } = require('../util/db')

class UserCart extends Model {}

UserCart.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'users', key: 'id' },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'products', key: 'id' },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    }
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'userCart',
  indexes: [
    {
      unique: true,
      fields: ['userId', 'productId'],
    }
  ]
})

module.exports = UserCart