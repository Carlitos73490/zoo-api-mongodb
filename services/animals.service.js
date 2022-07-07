import {animalsModel} from "../models/animals.model.js";
import { faker } from '@faker-js/faker';
import {addHours, differenceInHours} from "date-fns";


export async function getAnimals() {
    try{
        const animalsList = await animalsModel.find({});

        for await (const animal of animalsList) {
            animal.nextFeeding = await computeAnimalNextFeeding(animal);
        }

        return animalsList;
   } catch(err) {
        return err
    }
}

export async function addAnimals(name,race,foodfrequency) {
    try{
        const newAnimal = new animalsModel({
            name : name,
            race : race,
            foodFrequency : foodfrequency,
            lastFeed : new Date()
        });

        return await newAnimal.save()

    } catch (err){
        return err
    }

}


export async function removeAnimals(id){
    try{
        return await animalsModel.deleteOne({_id : id})
    } catch (err){
        return err
    }
}

export async function getAnimalById(id){
    try{
        return await animalsModel.findById(id)
    } catch (err){
        return err
    }
}

export async function insertManyAnimals() {
    try {
        let animalsListToInsert = [];
        for (let i = 0; i < 1000; i++) {
            animalsListToInsert.push(
                {
                    name: faker.name.firstName(),
                    species: faker.animal.type(),
                    foodFrequency: Math.floor((Math.random() * 10) + 2),
                    lastFeed: new Date()
                }
            )
        }
        return await animalsModel.insertMany(animalsListToInsert)
    } catch (err){
        return err
    }
}

export async function deleteAllAnimals() {
    try {
    return animalsModel.deleteMany({})
    } catch (err){
        return err
    }
}

export async function computeAnimalNextFeeding(animal) {
    try {
        const lastFeedingDate = animal.lastFeed;
        const nextFeedingDate = addHours(lastFeedingDate, animal.foodFrequency);
        const currentDay = await new Date();
        return differenceInHours(nextFeedingDate, currentDay);
    } catch (err) {
        return err;
    }
}
export async function getAnimalsBy(body) {
    try {
        for (const bodyKey in body) {
            const regex = new RegExp(body[bodyKey], 'i')
            body[bodyKey] = {"$regex" : regex}
        }

        return animalsModel.find(body)
    } catch (err){
        return err
    }
}

