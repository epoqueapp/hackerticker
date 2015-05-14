/**
 * Created by maximilianalexander on 5/13/15.
 */

var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    detail: String,
    externalLinks: {type: Array, default: []},
    imageUrls: {type: Array, default: []},
    memberUserIds: {type: Array, default: []},
    createdOn: {type: Date, default: Date.now},
    updatedOn: {type: Date, default: Date.now},
    views: {type: Number, default: 0}
});

module.exports = mongoose.model('Project', projectSchema);