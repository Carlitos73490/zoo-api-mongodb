const express = require('express');
const router = express.Router();

const Animals = require('../models/animals')


/* Récupération de la liste d'animals GET. */
router.get('/', async function (req, res, next) {
    const dogs = await Animals.find()
    res.send(dogs);
});

/* Ajout d'un Animal par méthode POST. */
router.post('/add', async function (req, res, next) {

    // a document instance
    var newDog = new Animals({name : req.body.name,color : req.body.color, race : req.body.race});

    // save model to database
    newDog.save(function (err, dog) {
        if (err) return console.error(err);
        console.log(dog.name + " saved to Animals collection.");
    });


    res.status(203).end()
});

/* Suppression d'un Animal par méthode POST. */
router.post('/delete', async function (req, res, next) {

    const action = await Animals.deleteOne({_id : req.body.id})

    if(action.error()){
        res.status(404).end()
    } else {
        res.status(203).end()
    }

});







module.exports = router;
