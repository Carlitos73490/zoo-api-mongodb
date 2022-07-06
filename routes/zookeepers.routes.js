const express = require('express');
const router = express.Router();

const zooKeepersModel = require('../models/zookeepers.model')


/* Récupération de la liste des gardiens GET. */
router.get('/', async function (req, res, next) {
    const dogs = await zooKeepersModel.find()
    res.send(dogs);
});

/* Ajout d'un Gardien par méthode POST. */
router.post('/', async function (req, res, next) {

    // a document instance
    var newZooKeeper = new zooKeepersModel({firstname : req.body.firstname,lastname : req.body.lastname});

    // save model to database
    newZooKeeper.save(function (err, keeper) {
        if (err) return console.error(err);
        console.log(keeper.name + " saved to Zookeepers collection.");
    });


    res.status(203).end()
});

/* Suppression d'un Gardien par méthode POST. */
router.delete('/', async function (req, res, next) {
    try{
        const result = await zooKeepersModel.deleteOne({_id : req.body.id})

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
