const router = require('express').Router()
const {Newsletter} = require("../models");

router.post("/", async (req, res, next) => {
  try {
    const newsletter = await Newsletter.create(req.body)
    res.json(newsletter)
  } catch (error) {
    next(error)
  }
})

module.exports = router