const express = require('express');
const Database = require('../database.js');

const kittenRoute = express.Router();
const kittens = new Database();

kittenRoute.route("/")
    .get((req, res) => {
        let data = kittens.find();
        if(data === undefined) {
            res.status(404).send({message: "404: NOT FOUND"})
        } else {
            res.status(200).send({message: "FOUND", data})
        }
    })
    .post((req, res) => {
        let data = kittens.save(req.body);
        if(data === undefined) {
            res.status(404).send({message: "404: NOT FOUND"})
        } else {
            res.status(201).send({message: "POST SUCCESSFUL", data})
        }
    })

kittenRoute.route("/:id")
    .put((req, res) => {
        let data = kittens.findOneAndUpdate(req.params.id, req.body);
        if(data === undefined) {
            res.status(404).send({message: "404: NOT FOUND"})
        } else {
            res.status(200).send({message: "EDIT SUCCESSFUL", data})
        }
    })
    .delete((req, res) => {
        let data = kittens.findOneAndRemove(req.params.id);
        if(data === undefined) {
            res.status(404).send({message: "404: NOT FOUND"})
        } else {
            res.status(200).send({message: "DELETION SUCCESSFUL", data})
        }
    })
    .get((req, res) => {
        let data = kittens.findOne(req.params.id);
        if(data === undefined) {
            res.status(404).send({message: "404: NOT FOUND"})
        } else {
            res.status(200).send({message: "FOUND ONE", data})
        }
    })

module.exports = kittenRoute;