/**
 * Created by maximilianalexander on 5/13/15.
 */
var ContactUs = require('../data/ContactUs');
module.exports = function(router){
    router.get('/contact', function (req, res) {
        res.render('contact');
    });

    router.post('/contact', function(req, res){
        var name = req.body.senderName;
        var email = req.body.senderEmail;
        var subject = req.body.subject;
        var message = req.body.message;

        ContactUs.createAsync({
            name: name,
            email: email,
            subject: subject,
            message: message
        }).then(function(contact){
            res.render('contact', {success: true});
        }).catch(function(err){
            res.render('contact', {error: err});
        });
    });

    router.get('/contact/list', function(req, res){
        ContactUs.findAsync({
        }).then(function(contacts){
            res.render('contact', {contacts: contacts});
        }).catch(function(err){
            res.render('contact', {error: err});
        });
    });
};
