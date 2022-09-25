const Person = require('../models/personPrototype')

// find person by  his name and update his age with new age


async function findOneAndUpdate(name, age) {
    // this function take name as an argument
    // this function find one persons matching the name on people collection
    // then update age to 20 years old
    try {
     
        const person = await Person.findOneAndUpdate( { name: name }, { $set: { age: age } }, { new: true });
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findOneAndUpdate;