const Product = require('./product');
const Contact = require('./contact');
const Newsletter = require('./newsletter');
const User = require('./user')
const UserLike = require('./userLike');
const UserCart = require('./userCart');

User.belongsToMany(Product, { through: UserLike, as: 'liked_products' })
Product.belongsToMany(User, { through: UserLike, as: 'users_liked' })

User.belongsToMany(Product, { through: UserCart, as: 'cart_products' })
Product.belongsToMany(User, { through: UserCart, as: 'users_cart' })

module.exports = {
  Product,
  Contact,
  Newsletter,
  User,
  UserLike,
  UserCart
}