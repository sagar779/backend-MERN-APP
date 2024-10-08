const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
    },
    gender:{
        type: String,
        enum:['male', 'female', 'other'],
        required: true,
    },

},{timestamps: true});

const User = mongoose.model('User',userSchema);
module.exports  = User;