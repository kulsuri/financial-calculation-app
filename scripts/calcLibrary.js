(function(window){
   'use strict';
    
    function defineBayside() {
        var Bayside = {};
        Bayside.alert = function(x, y) {
            console.log("this is a test messasge from the bayside framework");
            console.log(x+y);
        };
        return Bayside;
    }
    if(typeof(Bayside) === 'undefined'){
        window.Bayside = defineBayside();
    }
})(window);