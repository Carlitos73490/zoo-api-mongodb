import {animalsModel} from "../models/animals.model.js";
import { faker } from '@faker-js/faker';


export async function getAnimals() {
    try{
        return await animalsModel.find({})
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


export async function removeAnimals(){
    try{
        return await animalsModel.deleteOne({_id : id})
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
                    foodFrequency: Math.floor(Math.random() * 10),
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

export async function getAnimalsBy(body) {
    try {
        for (const bodyKey in body) {
            body[bodyKey] = `/${body[bodyKey]}/i`
        }

        return animalsModel.find(body)
    } catch (err){
        return err
    }
}

