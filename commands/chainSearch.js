const Person = require('../models/personPrototype')

// this functtion find the people with same interest of food

async function chainSearch(food) {
  
    
    try {
        const person = await Person.find({ food: food })
            .limit(2)
            .sort({ name: 1 })
            .select({ name: true })
            .exec();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = chainSearch;