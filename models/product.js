const {Model, DataTypes} = require("sequelize");

const {sequelize} = require("../util/db");

class Product extends Model {}

Product.init({
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
    validate: {
      min: 0,
    }
  },
  imageSrc: {
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
    validate: {
      max: 100,
    }
  },
  range: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'product'
})

module.exports = Product