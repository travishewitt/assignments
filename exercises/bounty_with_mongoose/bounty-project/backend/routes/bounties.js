const express = require('express')

const bountyRoute = express.Router();
const BountyModel = require('../models/bounties.js');

bountyRoute.route("/")
    .get((req, res) => {
        BountyModel.find(req.query, (err, bounties) => {
            if(err) {
                res.status(500).send({err})
            } else if (bounties.length === 0) {
                res.status(404).send({message: "NOT FOUND"})
            } else {
                res.status(200).send({message: "GET Successful", data: bounties})
            }
        })
    })
    i
    bountyRoute.route("/:id")
        .delete((req, res) => {
            BountyModel.findByIdAndRemove(req.params.id, (err, bounty) => {
                if(err) {
                    res.status(500).send({err})
                } else if (bounty === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else {
                    res.status(200).send({message: "DELETE Successful", data: bounty})
                }
            })
        })
        .get((req, res) => {
            BountyModel.findById(req.params.id, (err, bounty) => {
                if(err) {
                    res.status(500).send({err})
                } else if (bounty === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else {
                    res.status(200).send({message: "GET Successful", data: bounty})
                }
            })
        })
        .put((req, res) => {
            BountyModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, bounty) => {
                if(err) {
                    res.status(500).send({err})
                } else if (bounty === null) {
                    res.status(404).send({message: "NOT FOUND"})
                } else {
                    res.status(200).send({message: "EDIT Successful", data: bounty})
                }
            })
        })

        
module.exports = bountyRoute