const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user');
const cors = require('cors');


// for parsing application/xwww-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const dbURI = "mongodb://127.0.0.1:27017/Wysa-assessment-1" || '';
const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI, {})
    .then((result) => console.log('Connected to db'))
    .catch((err) => console.log(err));
// using session


app.use('/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})