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

var routes = require("./routes/routes.js")(app);

var server = app.listen(3000, function(){
    console.log("listening on port %s...", server.address().port);
});
