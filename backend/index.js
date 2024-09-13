const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/user');
const cors = require('cors');
const path = require('path')


// for parsing application/xwww-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));

const dbURI = "mongodb+srv://bosesnehasish01:nT1nGqeuUwe22MxK@cluster0.dc795.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI, {})
    .then((result) => console.log('Connected to db'))
    .catch((err) => console.log(err));
// using session


app.use('/user', userRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})