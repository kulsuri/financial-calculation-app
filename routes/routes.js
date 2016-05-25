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
            var discountRateDecimal = math.divide(discountRate, 100);
            var presentValue = [];
            var presentValueTotal = 0;

            for (i=0; i < years; ++i){
                var b = i+1;
                presentValue[i] = cashFlow[i]/math.pow(1+discountRateDecimal, b);
                presentValueTotal = math.add(presentValueTotal, presentValue[i]);
            }
            console.log("loop finished");
            var npv = math.add(-initialInvestment, presentValueTotal);
            var npvRounded = math.round(npv, 2);
            var npvValue = {"npv": npvRounded};
            console.log("npv = " + npv);
            return res.send(npvValue);
        }       
    });
//};

    app.post("/npv2", function(req, res){
        var discountRate = req.body.discountRate;
        var initialInvestment = req.body.initialInvestment;
        var years = req.body.years;
        var cashFlow = req.body.cashFlow;
        
        var finance = new Finance();
        var ds = 10;
        var ii = -50000
        var cf = [10000, 20000, 40000];
        var test123 =   finance.NPV(ds, ii, cf[0], cf[1], cf[2]);
//        var test123 =   finance.NPV(10, -500000, 200000, 300000, 200000);
        return res.send({test123});       
    });
    
};

module.exports = appRouter;