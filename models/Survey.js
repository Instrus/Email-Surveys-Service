const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }, //type: userID, ref to User collection
    dateSent: Date,
    lastResponded: Date
});

// add model surveySchema to mongoose library
mongoose.model('surveys', surveySchema);
// surveys collection will track each survey