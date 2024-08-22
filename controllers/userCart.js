const {UserCart} = require("../models");
const {tokenExtractor} = require("../util/middleware");
const router = require('express').Router()

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    if (req.body.userId !== req.decodedToken.id) {
      res.status(401).end()
    }
    const userCart = await UserCart.create(req.body)
    res.json(userCart)
  } catch (error) {
    next(error)
  }
})

router.put("/:id", tokenExtractor, async (req, res) => {
  const userCart = await UserCart.findByPk(req.params.id)
  if (userCart) {
    if (userCart.userId !== req.decodedToken.id) {
      res.status(401).end()
    }

    userCart.quantity = req.body.quantity
    await userCart.save()
    res.status(204).end()
  }
  else {
    res.status(404).end()
  }
})

router.delete('/:id', tokenExtractor, async (req, res) => {
  const userCart = await UserCart.findByPk(req.params.id)
  if (userCart) {
    if (userCart.userId !== req.decodedToken.id) {
      res.status(401).end()
    }

    await userCart.destroy()
    res.status(204).end()
  }
  else {
    res.status(404).end()
  }
})

module.exports = router