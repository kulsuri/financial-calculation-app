(function(window){
   'use strict';
    
    function defineBayside() {
        var Bayside = {};
        Bayside.alert = function(x, y) {
            console.log("this is a test messasge from the bayside framework");
            console.log(x+y);
//            var test = math.add(x,y);
//            console.log(test);
        };
        return Bayside;
    }
    if(typeof(Bayside) === 'undefined'){
        window.Bayside = defineBayside();
    }
})(window);