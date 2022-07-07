import {animalsModel} from "../models/animals.model.js";
import { faker } from '@faker-js/faker';


export async function getAnimals() {
    try{
        return  await animalsModel.find({})
   } catch(err) {
            console.log('erreur animalsModel find')
    }
}

export async function addAnimals(name,race,foodfrequency) {
    const newAnimal = new animalsModel({
        name : name,
        race : race,
        foodFrequency : foodfrequency,
        lastFeed : new Date()
    });

    newAnimal.save(function (err, animal) {
        if (err) return console.error(err);
        console.log(animal.name + " saved to animals collection.");
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

export async function insertManyAnimals() {
    let animalsListToInsert = [];

    for (let i= 0; i < 1000; i++) {
        animalsListToInsert.push(
            {
                name : faker.name.firstName(),
                species : faker.animal.type(),
                foodFrequency : Math.floor(Math.random() * 10),
                lastFeed : new Date()
            }
        )
    }

    animalsModel.insertMany(animalsListToInsert).then(() => console.log("Data inserted")).catch((err) => console.log(err));
}

