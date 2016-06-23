// var seneca = require('seneca')();
var math = require('mathjs');
var Finance = require('../libs/finance.js');
// seneca.client ({
//     host: 'localhost',
//     //port: '3001',
//     pin: {role: 'finance'}
// })
var appRouter = function(app){

    app.get("/", function(req, res){
        res.sendFile('npv.html', {root: __dirname + '/../templates'});
        //res.send("this is the homepage!!");
        //res.redirect("/home")
    });

    app.get("/about", function(req, res){
        res.send("this is about");
    });

    app.get("/contact", function(req, res){
        res.send("this is contact");
    });

    app.get("/home", function(req, res){
        res.sendFile('npv.html', {root: __dirname + '/../templates'});
    });

    app.get("/npv", function(req, res){
        res.sendFile('npv.html', {root: __dirname + '/../templates'});
    });
    
    app.get("/irr", function(req, res){
        res.sendFile('irr.html', {root: __dirname + '/../templates'});
    });

    app.post("/npv", function(req, res){
        var discountRate = req.body.discountRate;
        var initialInvestment = req.body.initialInvestment;
        var years = req.body.years;
        var cashFlow = req.body.cashFlow;

        if(!discountRate || !initialInvestment || !years || !cashFlow) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            var finance = new Finance();
            var npvValueFromLibrary = finance.NPV2(discountRate, initialInvestment, years, cashFlow);
            var npvRounded = math.round(npvValueFromLibrary, 2);
            var npvValue = {"npv": npvRounded}
            res.send(npvValue);
            //});
        }
    });
    
    app.post("/irr", function(req, res){
        var cashFlow = req.body.cashFlow;

        if(!cashFlow) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            var finance = new Finance();
            var irrValueFromLibrary = finance.IRR2(cashFlow);
            var irrValue = {"irr": math.round(irrValueFromLibrary, 2)};
            res.send(irrValue);
        }
    });
};

module.exports = appRouter;
