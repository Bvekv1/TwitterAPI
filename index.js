const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, )
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

const app = express();
let Article = require('./model/user');
app.listen(3000);