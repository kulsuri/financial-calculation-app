var math = require('mathjs');
var Finance = require('../libs/finance.js');

var appRouter = function(app){
    
    app.get("/", function(req, res){
        res.send("this is the homepage!!");
    });
    
    app.get("/about", function(req, res){
        res.send("this is about");
    });
    
    app.get("/contact", function(req, res){
        res.send("this is contact");
    });
    
    app.get("/home", function(req, res){
        res.sendFile('test.html', {root: __dirname + '/../templates'});
    });
    
    app.get("/npv", function(req, res){
        res.sendFile('index.html', {root: __dirname + '/../templates'});
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
            var npvValue = {"npv": npvRounded};
            return res.send(npvValue);       
        }
    });
};

module.exports = appRouter;