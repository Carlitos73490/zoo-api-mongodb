import {animalsModel} from "../models/animals.model.js";
import {faker} from '@faker-js/faker';
import {addHours, differenceInHours} from "date-fns";

/**
 * Récupération de tout les animaux
 * @return { any }
 */
export async function getAnimals() {
    try {
        const animalsList = await animalsModel.find({});

        for await (const animal of animalsList) {
            animal.nextFeeding = await computeAnimalNextFeeding(animal);
        }

        return animalsList;
    } catch (err) {
        return err
    }
}

/**
 * Ajout d'un nouvel animal
 * @param { String } name
 * @param { String } race
 * @param { number } foodfrequency
 * @return { any }
 */
export async function addAnimal(name, race, foodfrequency) {
    try {
        const newAnimal = new animalsModel({
            name: name,
            race: race,
            foodFrequency: foodfrequency,
            lastFeed: new Date()
        });
        return await newAnimal.save()
    } catch (err) {
        return err
    }
}

/**
 * Suppresion d'un animal par son id unique
 * @param { String } id
 * @return { any }
 */
export async function removeAnimals(id) {
    try {
        return await animalsModel.findByIdAndRemove(id)
    } catch (err) {
        return err
    }
}

/**
 * Récupération d'un animal par son id unique
 * @param { String } id
 * @return { any }
 */
export async function getAnimalById(id) {
    try {
        return await animalsModel.findById(id)
    } catch (err) {
        return err
    }
}

/**
 * Insertions de 1000 animaux en une requête Api
 * @return { any }
 */
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
    } catch (err) {
        return err
    }
}

/**
 * Suppresion de tout les animaux de la base
 * @return { any }
 */
export async function deleteAllAnimals() {
    try {
        return animalsModel.deleteMany({})
    } catch (err) {
        return err
    }
}

/**
 * Récupère l'animal et renvoi le nombre d'heures restant avant de le nourrir
 * @param animal
 * @returns {Promise<number|*>}
 */
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

/**
 * Récuperation de tout les animaux correspondants aux params (dynamique) de recherhe
 * le regex est la pour effectuer ue recherche souple
 * @param { Object } body
 * @return { any }
 */
export async function getAnimalsBy(body) {
    try {
        for (const bodyKey in body) {
            const regex = new RegExp(body[bodyKey], 'i')
            body[bodyKey] = {"$regex": regex}
        }
        return animalsModel.find(body)
    } catch (err) {
        return err
    }
}

/**
 * Permet de remettre le lastFeed à la date du jour pour simuler le fait de nourrir un animal
 * @param animalId
 * @returns {Promise<Query<Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId}, Document<unknown, any, unknown> & unknown extends {_id?: infer U} ? (U extends any ? {_id: Types.ObjectId} : Required<{_id: U}>) : {_id: Types.ObjectId}, unknown, unknown>|*>}
 */
export async function feedAnimal(animalId) {
    try {
        return animalsModel.findByIdAndUpdate(animalId, {lastFeed: new Date()});
    } catch (err) {
        return err;
    }
}
