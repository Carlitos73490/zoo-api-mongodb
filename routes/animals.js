const express = require('express');
const router = express.Router();

const Animals = require('../models/animals')


/* Récupération de la liste d'animals GET. */
router.get('/', async function (req, res, next) {
    const dogs = await Animals.find()
    res.send(dogs);
});

/* Ajout d'un Animal par méthode POST. */
router.post('/', async function (req, res, next) {

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
router.delete('/', async function (req, res, next) {
    try{
        const result = await Animals.deleteOne({_id : req.body.id})

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
            res.status(204).end()
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
            res.status(404).end()
        }
    } catch (err){
        res.status(500).end()
    }
});







module.exports = router;
