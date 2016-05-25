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
    
//    app.post("/npv", function(req, res){
//        var discountRate = req.body.discountRate;
//        var initialInvestment = req.body.initialInvestment;
//        var years = req.body.years;
//        var cashFlow = req.body.cashFlow;
//        if(!discountRate || !initialInvestment || !years || !cashFlow) {
//            return res.send({"status": "error", "message": "missing a parameter"});
//        } else {
//            var discountRateDecimal = math.divide(discountRate, 100);
//            var presentValue = [];
//            var presentValueTotal = 0;
//
//            for (i=0; i < years; ++i){
//                var b = i+1;
//                presentValue[i] = cashFlow[i]/math.pow(1+discountRateDecimal, b);
//                presentValueTotal = math.add(presentValueTotal, presentValue[i]);
//            }
//            console.log("loop finished");
//            var npv = math.add(-initialInvestment, presentValueTotal);
//            var npvRounded = math.round(npv, 2);
//            var npvValue = {"npv": npvRounded};
//            console.log("npv = " + npv);
//            return res.send(npvValue);
//        }       
//    });
////};

    app.post("/npv2", function(req, res){
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