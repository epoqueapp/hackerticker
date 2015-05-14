/**
 * Created by maximilianalexander on 5/13/15.
 */

var mongoose = require('mongoose');

var contactUs = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, required: true},
    createdOn: {default: Date.now, type: Date}
});

module.exports = mongoose.model('ContactUs', contactUs);