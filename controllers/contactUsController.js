/**
 * Created by maximilianalexander on 5/13/15.
 */
var ContactUs = require('../data/ContactUs');
module.exports = function(router){
    router.get('/contact', function (req, res) {
        res.render('contact');
    });

    router.post('/contact', function(req, res){
        var name = req.body.name;
        var email = req.body.email;
        var subject = req.body.subject;
        var message = req.body.message;

        ContactUs.createAsync({
            name: n()
        })
    });

    router.get('/contact/list', function(req, res){

    });
};
