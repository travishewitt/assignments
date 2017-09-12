const express = require('express');
const villainRoute = express.Router();
const VillainModel = require('../models/villains.js');

villainRoute.route("/")
    .get((req, res) => {
        VillainModel.find(req.query, (err, villains) => {
            if(err) {
                res.status(500).send({err})
            } else if (villains.length === 0) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(200).send({message: "GET Successful", data: villains})
            }
        })
    })
    .post((req, res) => {
        let villain = new VillainModel(req.body)
        villain.save((err, villain) => {
            if(err) {
                res.status(500).send({err})
            } else {
                res.status(201).send({message: "POST Successful", data: villain})
            }
        })
    })

    villainRoute.route("/:id")
        .delete((req, res) => {
            VillainModel.findByIdAndRemove(req.params.id, (err, villain) => {
                if(err) {
                    res.status(500).send({err})
                } else if (villain === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else {
                    res.status(200).send({message: "DELETE Successful", data: villain})
                }
            })
        })
        .get((req, res) => {
            VillainModel.findById(req.params.id, (err, villain) => {
                if(err) {
                    res.status(500).send({err})
                } else if (villain === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else {
                    res.status(200).send({message: "GET Successful", data: villain})
                }
            })
        })
        .put((req, res) => {
            VillainModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, villain) => {
                if(err) {
                    res.status(500).send({err})
                } else if (villain === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else {
                    res.status(200).send({message: "EDIT Successful", data: villain})
                }
            })
        })

    module.exports = villainRoute