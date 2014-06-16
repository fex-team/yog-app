var yog = require('yog'),
    app = require('express')(),
    port = process.env.PORT || 8000;


app.use(yog());

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});