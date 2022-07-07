import {animalsModel} from "../models/animals.model.js";


export async function getAnimals() {
    try{
        return  await animalsModel.find({})
   } catch(err) {
            console.log('erreur animalsModel find')
    }
}

export async function addAnimals(name,race,color) {
    const newAnimal = new animalsModel({name : name ,race : race,color : color});
    newAnimal.save(function (err, animal) {
        if (err) return console.error(err);
        console.log(animal.name + " saved to Zookeepers collection.");
    });
}


export async function removeAnimals(){
    try{
        const result = await animalsModel.deleteOne({_id : id})
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
        } else {
            console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (err){

    }
}

