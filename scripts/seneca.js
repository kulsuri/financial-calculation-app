var math = require('mathjs');
var Finance = require('../libs/finance.js');

var seneca = require('seneca')()

seneca.add({role: 'finance', cmd: 'NPV'}, function(args, done){
    console.log(args);
    var finance = new Finance();
    var npvValueFromLibrary = finance.NPV2(args.discountRate, args.initialInvestment, args.years, args.cashFlow);
    var npvRounded = math.round(npvValueFromLibrary, 2);
    var npvValue = {"npv": npvRounded}
    done(null, npvValue);
})

.add({role: 'finance', cmd: 'IRR'}, function(args, done){
    var finance = new Finance();
//            cashFlow = [200000, 300000, 200000]
            console.log(cashFlow);
            console.log(cashFlow[0]);
            var irrValueFromLibrary = finance.IRR(-args.initialInvestment, args.cashFlow[0], args.cashFlow[1], args.cashFlow[2]);

            console.log(irrValueFromLibrary);
            var irrValue = {"irr": math.round(irrValueFromLibrary, 2)};
            done(null, irrValue);   
})

seneca.listen
({
    host: 'localhost',
    port: '3001'
})