var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.set('views', __dirname + '/templates');
//app.use(express.static(__dirname + '/templates'));

app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/libs", express.static(__dirname + '/libs'));
app.use("/styles",  express.static(__dirname + '/styles'));
//app.use("/images",  express.static(__dirname + '/images'));


// Add headers
//app.use(function (req, res, next) {
//
//    // Website you wish to allow to connect
//    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:50388');
//
//    // Request methods you wish to allow
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//
//    // Request headers you wish to allow
//    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//
//    // Set to true if you need the website to include cookies in the requests sent
//    // to the API (e.g. in case you use sessions)
//    res.setHeader('Access-Control-Allow-Credentials', true);
//
//    // Pass to next layer of middleware
//    next();
//});

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function(){
    console.log("listening on port %s...", server.address().port);
});
