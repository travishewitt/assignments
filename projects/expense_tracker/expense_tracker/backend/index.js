const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const expenseRoute = require("./routes/expenses.js")
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/expenses", expenseRoute);

mongoose.connect("mongodb://localhost/expenses", () => {
    console.log("Connected");
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})