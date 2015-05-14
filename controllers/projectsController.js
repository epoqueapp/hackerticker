/**
 * Created by maximilianalexander on 5/13/15.
 */

module.exports = function(router){
    router.get('/', function (req, res) {
        res.render('home');
    });

    router.get('/projects/new', function(req, res){
        res.render('project-edit', {projectTitle: 'Create a New Project'});
    });
};
