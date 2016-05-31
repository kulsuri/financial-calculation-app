var seneca = require('seneca')()
seneca.client ({
    host: 'localhost',
    port: '3001',
    pin: {role: 'finance'}
})
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
            seneca.act({role: 'finance', cmd: 'NPV', discountRate: discountRate, initialInvestment: initialInvestment, years: years, cashFlow: cashFlow }, function(err, done) 
                {
                    console.log(done)
                    return res.send(done)
                }
                      )
             
        }
    });
};

module.exports = appRouter;