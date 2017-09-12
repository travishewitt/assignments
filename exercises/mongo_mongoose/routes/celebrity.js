const express = require('express');
const celebrityRoute = express.Router();
const CelebrityModel = require('../models/celebrity.js');

celebrityRoute.route('/')
    .get((req, res) => {
        CelebrityModel.find(req.query, (err, celebrities) => {
            if(err) {
                res.status(500).send({err});
            } else if (celebrities.length === 0) {
                res.status(404).send({message: "NOT FOUND", data: celebrities})
            } else {
                res.status(200).send({message: "GET Successful", data: celebrities})
            }
        })
    })
    .post((req, res) => {
        let celebrity = new CelebrityModel(req.body)
        celebrity.save((err, celebrity) => {
            if(err) {
                res.status(500).send({err})
            } else {
                res.status(201).send({message: "POST Successful", data: celebrity})
            }
        })
    })

    celebrityRoute.route("/:id")
        .get((req, res) => {
            CelebrityModel.findById(req.params.id, (err, celebrity) => {
                if(err) {
                    res.status(500).send({err})
                } else if (celebrity === null) {
                    res.status(404).send({message: "NOT FOUND", data: celebrity})
                } else {
                    res.status(200).send({message: "GET Successful", data: celebrity})
                }
            })
        })
        .delete((req, res) => {
            CelebrityModel.findByIdAndRemove(req.params.id, (err, celebrity) => {
                if(err) {
                    res.status(500).send({err})
                } else if (celebrity === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else (
                    res.status(200).send({message: "DELETE Successful", data: celebrity})
                )
            }) 
        })
        .put((req, res) => {
            CelebrityModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, celebrity) => {
                if(err) {
                    res.status(500).send({err})
                } else if (celebrity === null) {
                    res.status(404).send({message: "NOT FOUND", data: celebrity})
                } else {
                    res.status(200).send({message: "EDIT Successful", data: celebrity})
                }
            })
        })

    module.exports = celebrityRoute