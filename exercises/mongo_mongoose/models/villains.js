const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const villainSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const VillainModel = mongoose.model("villains", villainSchema)

module.exports = VillainModel