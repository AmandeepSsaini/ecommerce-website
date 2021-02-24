const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

// Calling the config file for starting the server

env.config();

// mongodb+srv://amansaini:<password>@cluster0.jd7aw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect('mongodb://localhost:27017/test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database COnnected")
    })


app.use(bodyParser());

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Hello from server"
    })
})

app.post("/data", (req, res, next) => {
    res.status(200).json({
        message: req.body
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})