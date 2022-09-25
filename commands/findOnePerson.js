const Person = require('../models/personPrototype')

 // find one person from the collection

async function findOnePerson(name) {
   


    try {
    
        const person = await Person.findOne({ name: name});
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findOnePerson;