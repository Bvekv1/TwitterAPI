const mongoose = require('mongoose');

//user Schema
const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: false
    },
    profileImage:{
        type: String,
        required:false
    }
});

module.exports = mongoose.model('User', userSchema);
