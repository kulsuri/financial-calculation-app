(function(window){
    // You can enable the strict mode commenting the following line  
     'use strict';

    // This function will contain all our code
    function myLibrary(){
        var _myLibraryObject = {};


        // Just create a property to our library object.    
        _myLibraryObject.calculateNPV = function(x, y, z){
            console.log(x + y + z);
//            console.log("x = " + x);
//            console.log("y = " + y);
//            console.log("z = " + z);
        };

        return _myLibraryObject;
    }

    // We need that our library is globally accesible, then we save in the window
    if(typeof(window.myWindowGlobalLibraryName) === 'undefined'){
        window.myWindowGlobalLibraryName = myLibrary();
    }
});
//})(window); // We send the window variable withing our function


// Then we can call our custom function using
//myWindowGlobalLibraryName.calculateNPV(1,2,3);
//myWindowGlobalLibraryName.myCustomLog(["My library","Rules"]);
