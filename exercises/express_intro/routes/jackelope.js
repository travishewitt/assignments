const express = require('express');
//import 
const Database = require('../database.js')
const jackelopeRoute = express.Router();
const jackelopes = new Database();

jackelopeRoute.route("/")
    .get((req, res) => {
        //below will let you search your database, 
        //and return the items in the jackelope database.
        let data = jackelopes.find();
        if(data === undefined) {
            res.status(404).send({message: "NOT FOUND!"})
        } else {
            res.status(200).send({message: "YEAH BABY!", data
        }
    )}
    })
    .post((req, res) => {
        let data = jackelopes.save(req.body);
        if(data===undefined) {
            res.status(404).send({message: "NOT FOUND!"})
        } else {
            res.status(201).send({message: "YEAH BABY!", data})
        }
        }
    )
   
    jackelopeRoute.route("/:id")
        .delete((req, res) => {
            let data = jackelopes.findOneAndRemove(req.params.id);
            if(data === undefined) {
                res.status(404).send({message: "NOT FOUND!"})
            } else {
                res.status(200).send({message: "YEAH BABY!", data})
            }
        })
        .put((req, res) => {
            let data = jackelopes.findOneAndUpdate(req.params.id, req.body);
            if(data === undefined) {
                res.status(404).send({message: "NOT FOUND!"})
            } else {
                res.status(200).send({message: "YEAH BABY!", data})
            }
        })
        .get((req, res) => {
            let data = jackelopes.findOne(req.params.id);
            if(data === undefined) {
                res.status(404).send({message: "NOT FOUND!"})
            } else {
                res.status(200).send({message: "YEAH BABY!", data})
            }
        })
module.exports = jackelopeRoute;