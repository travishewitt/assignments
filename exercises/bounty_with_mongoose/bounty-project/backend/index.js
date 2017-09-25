const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const bountiesRoute = require('./routes/bounties.js')
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use("/bounties", bountiesRoute);


mongoose.connect("mongodb://localhost/bounties", () => {
    console.log("connected to mongodb");
    app.listen(PORT, ()=> {
        console.log(`Listening on port ${PORT}`)
    });
});

