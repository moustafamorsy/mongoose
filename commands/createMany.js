const Person = require('../models/personPrototype')

// all  new persons to the collection
async function createMany(array) {
  
    try {
        const people = await Person.create(array)
        console.log(people);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createMany;