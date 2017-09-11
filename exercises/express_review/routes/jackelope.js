const express = require('express');
//import 
const jackelopeRoute = express.Router();

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
module.exports = jackelopeRoute;