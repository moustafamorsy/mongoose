const Person = require('../models/personPrototype')

// add single person to collection

async function createPerson(name, age, favArray) {
 
    try {
        const person = await new Person({
            name: name,
            age: age,
            favoriteFoods:favArray
        })
        person.save();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createPerson;