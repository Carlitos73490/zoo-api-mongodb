const express = require('express');
const router = express.Router();

const Animals = require('../models/animals')


/* GET Animals. */
router.get('/', async function (req, res, next) {
    const dogs = await Animals.find()
    res.send(dogs);
});

/* Post Animals. */
router.post('/post', async function (req, res, next) {

    // a document instance
    var newDog = new Animals({name : req.body.name,color : req.body.color, race : req.body.race});

    // save model to database
    newDog.save(function (err, dog) {
        if (err) return console.error(err);
        console.log(dog.name + " saved to Animals collection.");
    });

    res.status(203).end()
});







module.exports = router;
