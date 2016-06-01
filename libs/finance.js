// Instantiate a Finance class
var Finance = function() {};

Finance.prototype.NPV2 = function(discountRate, initialInvestment, years, cashFlow) {
    var discountRateDecimal = discountRate/100;
    var presentValue = [];
    var presentValueTotal = 0;

    for (i=0; i < years; ++i){
        var b = i+1;
        presentValue[i] = cashFlow[i]/Math.pow(1+discountRateDecimal, b);
        presentValueTotal = presentValueTotal + presentValue[i];
    }
    var npv = -initialInvestment + presentValueTotal;
    return npv;
};

// Internal Rate of Return (IRR)
Finance.prototype.IRR2 = function(CArray) {
    var min = -1.0;
    var max = 1.0;
    var guess = (min + max) / 2;
    var lastGuess = 1.0
    var notSame = true
    var NPV = 0;
    do {
        NPV = 0;
        guess = (min + max) / 2;
        // console.log(guess,min,max)
        if (Math.abs(lastGuess-guess)<0.0000000000000000001) notSame = false
        lastGuess = guess
        for (var j=0; j<CArray.length; j++) {
            NPV += CArray[j] / (Math.pow(1+guess,j))
            //NPV += PVCalc(CArray[j],guess,j);
        }
        if (NPV > 0) {
            min = guess;
        } else {
            max = guess;
        }
    } while(notSame && (Math.abs(NPV) > 0.0000000000000000001));
    var raw = parseFloat(guess * 100).toFixed(2);
    return parseFloat(raw);
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Finance;
    }
}
