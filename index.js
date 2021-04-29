const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

//creating express server
const app = express();
const port = process.env.PORT || 5000;

//middleware allow us to send and recieve json
app.use(cors());
app.use(express.static('build'));
app.use(express.json());

//connecting to the db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose DB connection established successfully.");
})

//using the files in the routes folder
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});