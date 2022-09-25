let mongoose = require('mongoose');
require('dotenv').config('./.env');
let chainSearch = require('./commands/chainSearch')
let createMany = require('./commands/createMany')
let createPerson = require('./commands/createPerson')
let findByIdAndRemove = require('./commands/findByIdAndRemove')
let findByIdUpdate = require('./commands/findByIdUpdate')
let findOneAndUpdate = require('./commands/findOneAndUpdate')
let findOnePerson = require('./commands/findOnePerson')
let findPeople = require('./commands/findPeople')
let findPersonById = require('./commands/findPersonById')
let removeMany = require('./commands/removeMany')


async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDb();


// createPerson( name , age (number) , food [array]);


// createMany([
//             {
//                 name:  ,
//                 age:  ,
//                 favoriteFoods: []
//             },{
//                 name:  ,
//                 age:  ,
//                 favoriteFoods: []
//             }
//         ]
//     )



// take one argument find person by name 

// findOnePerson()



// pass _id

// findPersonById();

// take two parameters _id and kind of food

// findByIdUpdate()

// take two parameters _id and age to update the age for that person

// findOneAndUpdate()

  
// take _id as parameter and remive the whole object with that id

// findByIdAndRemove()


// take one paramete remove by name

// removeMany()

// chainSearch with limitation 

// chainSearch()

// get all people in DB

// findPeople();