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
//            var npvRounded = math.round(npvValueFromLibrary, 2);
            var npvValue = {"npv": math.round(npvValueFromLibrary, 2)};
            return res.send(npvValue);       
        }
    });
    
    app.post("/irr", function(req, res){
        var initialInvestment = req.body.initialInvestment;
        var years = req.body.years;
        var cashFlow = req.body.cashFlow;

        if(!initialInvestment || !years || !cashFlow) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            var finance = new Finance();
            cashFlow = [200000, 300000, 200000]
            console.log(cashFlow);
            console.log(cashFlow[0]);
//            var irrValueFromLibrary = finance.IRR(-initialInvestment, cashFlow[0], cashFlow[1], cashFlow[2]);
            var irrValueFromLibrary = finance.IRR(-initialInvestment, cashFlow);

            console.log(irrValueFromLibrary);
//            var irrRounded = math.round(irrValueFromLibrary, 2);
            var irrValue = {"irr": math.round(irrValueFromLibrary, 2)};
            return res.send(irrValue);       
        }
    });
};

module.exports = appRouter;