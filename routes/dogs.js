const express = require('express');
const router = express.Router();

const Dogs = require('../models/dogs')


/* GET Dogs. */
router.get('/', async function (req, res, next) {
    const dogs = await Dogs.find()
    res.send(dogs);
});

/* Post Dogs. */
router.post('/post', async function (req, res, next) {

    // a document instance
    var newDog = new Dogs({name : req.body.name,color : req.body.color, race : req.body.race});

    // save model to database
    newDog.save(function (err, dog) {
        if (err) return console.error(err);
        console.log(dog.name + " saved to Dogs collection.");
    });

    res.status(203).end()
});







module.exports = router;
