const Person = require('../models/personPrototype')

// find person by his id from the collection

async function findPersonById(id) {
  
    try {
        const person = await Person.findById(id);
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findPersonById;