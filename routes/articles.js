const express = require('express');
const router = express.Router();

const Articles = require('../models/Articles')


/* GET Articles. */
router.get('/', async function (req, res, next) {
  const dogs = await Articles.find({year : 2012}).limit(4)
  res.send(dogs);
});






module.exports = router;
