const express = require('express');
const Database = require('../database.js');
const doggos = new Database;
const doggosRoute = express.Router();


doggosRoute.route("/")
    .get((req, res) => {
        let data = doggos.find();
        if(data === undefined) {
            res.status(404).send({message: "NOT FOUND"})
        } else {
            res.status(200).send({message: "FOUND", data})
        }
    })
    .post((req, res) => {
        let data = doggos.save(req.body)
        if (data === undefined) {
            res.status(404).send({message: "NOT FOUND"})
        } else {
            res.status(201).send({message: "POST COMPLETE", data})
        }
    })

    module.exports = doggosRoute