// file needs to be required before any other files interacting with database
const mongoose = require('mongoose');
const { Schema } = mongoose; //same as const Schema = mongoose.Schema

// create new Schema
const userSchema = new Schema({
    googleId: String
});

// (model class) create new collection named users using the userSchema defined earlier
mongoose.model('users', userSchema);