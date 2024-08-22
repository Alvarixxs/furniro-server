const {UserLike} = require("../models");
const {tokenExtractor} = require("../util/middleware");
const router = require('express').Router()

router.post("/", tokenExtractor, async (req, res, next) => {
  try {
    if (req.body.userId !== req.decodedToken.id) {
      res.status(401).end()
    }
    const userLike = await UserLike.create(req.body)
    res.json(userLike)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', tokenExtractor, async (req, res) => {
  const userLike = await UserLike.findByPk(req.params.id)
  if (userLike) {
    if (userLike.userId !== req.decodedToken.id) {
      res.status(401).end()
    }

    await userLike.destroy()
    res.status(204).end()
  }
  else {
    res.status(404).end()
  }
})

module.exports = router