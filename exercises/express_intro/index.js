const express = require('express')
const app = express();
const PORT = 8080
const bodyParser = require('body-parser')
const Database = require("./database.js");
const jackelopeRoute = require('./routes/jackelope.js')
const kittenRoute = require('./routes/kitten.js')
const doggosRoute = require('./routes/doggos.js')


//hey app, when you see a get request with the end point /, send back an object with a bunch of methods and shit.// 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use("/jackelopes", jackelopeRoute);
app.use("/kittens", kittenRoute);
app.use("/doggos", doggosRoute);

app.listen(PORT, () => {
    console.log("oh hay baybay" + PORT);
})