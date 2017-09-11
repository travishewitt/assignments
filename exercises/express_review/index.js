const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jackelopeRoute = require('./routes/jackelope.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use("/jackelopes", jackelopeRoute);

app.listen(PORT, () => {
    console.log("hihihihiihihi")
})

