var math = require('mathjs');
var Finance = require('../libs/finance.js');

var seneca = require('seneca')()

//console.log("!-- seneca server started --!")

seneca.add({role: 'finance', cmd: 'NPV'}, function(args, done){
    console.log(args);
    var finance = new Finance();
    var npvValueFromLibrary = finance.NPV2(args.discountRate, args.initialInvestment, args.years, args.cashFlow);
    var npvRounded = math.round(npvValueFromLibrary, 2);
    var npvValue = {"npv": npvRounded}
    done(null, npvValue);
})
.add({role: 'finance', cmd: 'IRR'}, function(args, done){
    console.log(args.cashFlow);
    var finance = new Finance();
    var irrValueFromLibrary = finance.IRR2(args.cashFlow);
    var irrValue = {"irr": math.round(irrValueFromLibrary, 2)};
    done(null, irrValue);
})

seneca.listen
({
    host: 'localhost',
    //port: '3001'
<<<<<<< HEAD
    //timeout: 5000
    //port:  'process.env.PORT || 3001'
=======
    port:  '3001'
>>>>>>> master
})
