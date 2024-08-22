const router = require('express').Router()
const {Contact} = require("../models");

router.post("/", async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body)
    res.json(contact)
  } catch (error) {
    next(error)
  }
})

module.exports = router