import {animalsModel} from "../models/animals.model.js";


export async function getAnimals() {
    try{
        return  animalsModel.find({})
   } catch(err) {
            console.log('erreur animalsModel find')
    }
}


