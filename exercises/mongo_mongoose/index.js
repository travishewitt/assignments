const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const celebrityRoute = require('./routes/celebrity.js');
const villainRoute = require('./routes/villains.js')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/celebrity', celebrityRoute);
app.use('/villains', villainRoute)

mongoose.connect('mongodb://localhost/celebrity', () => {
    console.log("connected to mongodb");
    app.listen(PORT, () => {
        console.log(`LISTENING ON PORT ${PORT}`)
    })
})