let mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchem = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    age: Number,
    favoriteFoods:[String]
   
})

module.exports = mongoose.model('Person', personSchem);