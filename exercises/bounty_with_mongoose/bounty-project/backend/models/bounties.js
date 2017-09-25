const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required: true
    }, 
    bountyAmount: {
        type: String, 
        required: true
    }, 
    isAlive: {
        type: String,
        required: true
    }
})

const BountyModel = mongoose.model("bounty", bountySchema)

module.exports = BountyModel