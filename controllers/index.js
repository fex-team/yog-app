module.exports = function( router ) {

    router.get('/', function(req, res) {
        res.bigpipe.bind('jumbotron', function(cb) {
            setTimeout(function() {
                cb(null);
            }, 1000);
        });

        
        res.bigpipe.bind('heding1', function(cb) {
            setTimeout(function() {
                cb(null, {
                    title: 'Pagelet A',
                    content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
                });
            }, 2000);
        });

        res.bigpipe.bind('heding2', function(cb) {
            setTimeout(function() {
                cb(null, {
                    title: 'Pagelet B',
                    content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
                });
            }, 3000);
        });

        res.bigpipe.bind('heding3', function(cb) {
            setTimeout(function() {
                cb(null, {
                    title: 'Pagelet C',
                    content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.'
                });
            }, 4000);
        });


        res.render('example/index.tpl', {
            title: 'Welcome to yogurt!'
        });
    });
}