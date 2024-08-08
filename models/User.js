// file needs to be required before any other files interacting with database
const mongoose = require('mongoose');
const { Schema } = mongoose;

// new Schema
const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 }
});

// (model class) create new collection named users using the userSchema defined earlier
mongoose.model('users', userSchema);