const Person = require('../models/personPrototype')

// find person by his id and then remove it from collection

async function findByIdAndRemove(id) {
  
    try {
        const person = await Person.findByIdAndRemove(id);
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findByIdAndRemove;