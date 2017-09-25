const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {timestamps: true})

const ExpenseModel = mongoose.model("expense", expenseSchema)

module.exports = ExpenseModel