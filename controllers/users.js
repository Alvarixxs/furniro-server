const bcrypt = require('bcrypt')
const router = require('express').Router()

const { User, Product} = require('../models')
const {tokenExtractor} = require("../util/middleware");

router.get('/', async (req, res) => {
  const users = await User.findAll({
    attributes: { exclude: ['passwordHash'] },
  })
  res.json(users)
})

router.post('/', async (req, res, next) => {
  try {
    const { username, name, password } = req.body

    if (password.length < 5 || password.length > 30) {
      res.status(400).send({error: 'password length must be between 5 and 30 characters'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    await User.create({username, name, passwordHash})

    res.status(201).json({username, name})
  } catch (error) {
    next(error)
  }
})

router.get('/:id', tokenExtractor, async (req, res) => {
  console.log(req.params.id, req.decodedToken.id)

  if (Number(req.params.id) !== req.decodedToken.id) {
    res.status(401).end()
  }

  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ['passwordHash'] },
    include: [
      {
        model: Product,
        as: 'liked_products',
        attributes: {exclude: ['userId']},
        through: {
          attributes: ['id'],
        }
      },
      {
        model: Product,
        as: 'cart_products',
        attributes: {exclude: ['userId']},
        through: {
          attributes: ['id','quantity'],
        }
      }
    ]
  })
  if (user) {
    res.json(user)
  } else {
    res.status(404).end()
  }
})

module.exports = router