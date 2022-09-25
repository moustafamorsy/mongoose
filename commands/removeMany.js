const Person = require('../models/personPrototype')

// take name and remove all the document with that name from the collection

async function removeMany(name) {
  
  
    try {
        const res = await Person.remove({ name: name });
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = removeMany;