/**
 * Created by maximilianalexander on 5/13/15.
 */

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name: String,
    email: {type: String},
    twitterId: {type: String, required: true},
    twitterUsername: {type: String},
    createdOn: {default: Date.now, type: Date},
    role: {type: String, enum: ['admin', 'normal'], default: 'normal'}
});

module.exports = mongoose.model('User', userSchema);