var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),

    config = {
      port: 8082,
      context: 'nexus-bower',
      prefix: 'nexus://'
    },
 
    app = express(),
    server = http.createServer(app).listen( process.env.PORT || config.port);
 
app.use( bodyParser.json() );
 
// wait for a request as: 
// http://<hostname>/<context>/packages/<package-name> 
// respond a simple JSON 
app.get('/' + config.context + '/packages/:name', function(req, res){
    res.json({
        "name": req.params.name,
        "url": config.prefix + req.params.name + '/' +req.params.name
    });
});

console.log("STARTUP:: Express Bower registry simulator server listening on port::", server.address().port, ", environment:: ", app.settings.env);
