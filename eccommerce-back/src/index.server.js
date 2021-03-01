
const express = require('express')
const env = require('dotenv')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/Admin/auth')


// MongoDB Connection Link
// mongodb+srv://amansaini:<password>@cluster0.jd7aw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
env.config();
app.use(bodyParser());

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.jd7aw.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Database Connected")
    }).catch(() => {
        console.log("Unable to connect to database")
    })


app.use('/api', authRoutes)
app.use('/api', adminRoutes)

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})
