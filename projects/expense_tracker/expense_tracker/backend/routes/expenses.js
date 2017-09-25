const express = require('express');

const expenseRoute = express.Router();
const ExpenseModel = require('../models/expenses.js');

expenseRoute.route("/")
    .get((req, res) => {
        ExpenseModel.find(req.query, (err, expenses) => {
            if(err) {
                res.status(500).send({err})
            } else if (expenses.length === 0) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(200).send({message: "GET SUCCESSFUL", data: expenses})
            }
        })
    })
    .post((req, res) => {
        let expense = new ExpenseModel(req.body)
        expense.save((err, expense) => {
            if(err) {
                res.status(500).send({err})
            } else if (expense === null) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(201).send({message: "POST SUCCESSFUL", data: expense})
            }
        })
    })
expenseRoute.route("/:id")
    .delete((req, res) => {
        ExpenseModel.findByIdAndRemove(req.params.id, (err, expense) => {
            if(err) {
                res.status(500).send({err})
            } else if (expense === null) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(200).send({message: "DELETE SUCCESSFUL", data: expense})
            }
        })
    })
    .get((req, res) => {
        ExpenseModel.findById(req.params.id, (err, expense) => {
            if(err) {
                res.status(500).send({err})
            } else if (expense === null) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(200).send({message: "GET SUCCESSFUL", data: expense})
            }
        })
    })
    .put((req, res) => {
        ExpenseModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, expense) => {
            if(err) {
                res.status(500).send({err})
            } else if (expense === null) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(200).send({message: "EDIT SUCCESSFUL", data: expense})
            }
        })
    })

    module.exports = expenseRoute;