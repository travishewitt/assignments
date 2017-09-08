const express = require('express');
const app = express();
const PORT = 8080;
const Database = require('./database.js');
const bodyParser = require('body-parser');

let bounties = new Database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/bounties", (req, res) => {
    let data = bounties.find()
    res.status(200).send({message: "retrieve successful", data})
})

app.get("/bounties/:id", (req, res) => {
    let data = bounties.findOne(req.params.id)
    res.status(200).send({message: "singular retrieve successful", data})
})

app.post("/bounties", (req, res) => {
    let data = bounties.save(req.body)
    res.status(201).send({message: "post successful", data})
})

app.delete("/bounties/:id", (req, res) => {
    let data = bounties.findOneAndRemove(req.params.id)
    res.status(200).send({message: "deletion successful", data})
})

app.put("/bounties/:id", (req, res) => {
    let data = bounties.findOneAndUpdate(req.params.id, req.body)
    res.status(200).send({message: "edit successful", data})
})

app.listen(PORT, () => {
    console.log("hey bitch")
})