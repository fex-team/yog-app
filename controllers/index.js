module.exports = function( router ) {

    router.get('/', function(req, res) {
        res.end('It works!');
    });
}