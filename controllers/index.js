module.exports = function( router ) {

    router.get('/', function(req, res) {
        res.bigpipe.bind('pageletA', function(cb) {
            var model = {
                content: 'hello world'
            };

            setTimeout(function() {
                cb(null, model);
            }, 2000);
        });

        res.render('example/index.tpl', {
            title: 'Welcome to yogurt!'
        });
    });
}