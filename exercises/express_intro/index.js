const express = require('express')
const app = express();
const PORT = 8080
const bodyParser = require('body-parser')
const Database = require("./database.js");
let teacups = new Database();

//hey app, when you see a get request with the end point /, send back an object with a bunch of methods and shit.// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.get("/teacups", (req, res) => {
    let data = teacups.find();
    res.status(200).send({message: "SUCCESS", data})
})

app.get("/teacups/:id", (req, res) => {
    let data = teacups.findOne(req.params.id)
    res.status(200).send({message: "SINGULAR RETRIEVE SUCCESSFUL", data})
})
app.post("/teacups", (req, res) => {
    let data = teacups.save(req.body)
    res.status(201).send({message: "SUCCEX", data})
})

app.delete("/teacups/:id", (req, res) => {
    let data = teacups.findOneAndRemove(req.params.id)
    res.status(200).send({message: "DELETE SUCESSFUL", data})
})

app.put("/teacups/:id", (req, res) => {
    let data = teacups.findOneAndUpdate(req.params.id, req.body)
    res.status(200).send({message: "EDIT SUCCESSFUL", data})
})

function myLogger (req, res, next) {
    console.log({message: "greetings motha fucka", spelledOut: ["greetings", "motha", "fucka"]})
    next();
}

app.listen(PORT, () => {
    console.log("oh hay baybay" + PORT);
})