const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
var morgan = require('morgan');
var multer = require('multer');
var upload = multer();
var cors = require('cors');
const uploadRouter = require('./controller/imageUpload');

var userController = require('./controller/users');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(upload.array()); 
app.use(express.static('public'));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log("Mongodb connected"))
    .catch(err => console.log(err));

app.post('/registerUser', userController.register);
app.use('/upload', uploadRouter);

app.post('/login', userController.login);

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});