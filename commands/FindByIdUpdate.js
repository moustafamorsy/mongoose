const Person = require('../models/personPrototype')

// find person by  his id and update the  favoriteFoods array to the new data

async function findByIdUpdate(id, food) {

    try {
        const person = await Person.findById(id);
        person.favoriteFoods.push(food);
        person.save();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findByIdUpdate;