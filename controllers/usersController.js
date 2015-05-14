/**
 * Created by maximilianalexander on 5/13/15.
 */
var User = require('../data/User');
module.exports = function(router){
    router.get('/api/users', function (req, res) {
        User.findAsync({}).then(function(users){
            res.send(users);
        }).catch(function(err){
            res.status(500).send(err);
        });
    });
};
