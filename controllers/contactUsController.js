/**
 * Created by maximilianalexander on 5/13/15.
 */

module.exports = function(router){
    router.get('/contact', function (req, res) {
        res.render('contact');
    });

    router.post('/contact', function(req, res){

    });

    router.get('/contact/list', function(req, res){

    });
};
