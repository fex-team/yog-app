module.exports = function( router ) {

    router.get('/', function(req, res) {
        res.bigpipe.bind('pageletA', function(cb) {
            var model = {
                content: 'pagelet A model'
            };

            setTimeout(function() {
                cb(null, model);
            }, 2000);
        });

        res.bigpipe.bind('pageletB', function(cb) {
            var model = {
                content: 'pagelet B model'
            };

            setTimeout(function() {
                cb(null, model);
            }, 5000);
        });

        res.bigpipe.bind('pageletC', function(cb) {
            var model = {
                content: 'pagelet C model'
            };

            setTimeout(function() {
                cb(null, model);
            }, 3000);
        });

        res.render('example/index.tpl', {
            title: 'Welcome to yogurt!'
        });
    });
}