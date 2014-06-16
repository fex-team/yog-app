module.exports = function( router ) {

    router.get('/', function(req, res) {
        res.render('example/index.tpl', {
            title: 'Welcome to yogurt!'
        });
    });
}