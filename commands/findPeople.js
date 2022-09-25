const Person = require('../models/personPrototype')

 //  find all persons exist in the collection

async function findPeople() {
   
  
    try {
        const person = await Person.find();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findPeople;