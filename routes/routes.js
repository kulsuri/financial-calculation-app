var math = require('mathjs');

var appRouter = function(app){
    
    app.get("/", function(req, res){
        res.send("this is the homepage");
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
    
    app.get("/account", function(req, res, next){
        var accountMock = {
            "username": "kulsuri",
            "password": "QwErTy123",
            "twitter": "theBestRestApiTwitterAccount"
        };
        if(!req.query.username){
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username){
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });
    
    app.post("/account", function(req, res) {
        if(!req.body.username) {
            return res.send({"status": "error", "message": "missing username"});
        } else if(!req.body.password) {
            return res.send({"status": "error", "message": "missing password"});
        } else if(!req.body.twitter) {
            return res.send({"status": "error", "message": "missing twitter"});
        } else {
            return res.send(req.body);
        }
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
//                console.log("present value " + i + ": " + presentValue[i]);
                presentValueTotal = math.add(presentValueTotal, presentValue[i]);
//                console.log("present value total " + i + ": " + presentValueTotal);
            }
            console.log("loop finished");
            var npv = math.add(-initialInvestment, presentValueTotal);
            var npvRounded = math.round(npv, 2);
            var npvValue = {"npv": npvRounded};
            console.log("npv = " + npv);
//            console.log(npvValue);
            return res.send(npvValue);
        }       
    });
};

module.exports = appRouter;