'use strict';

function sum(a) {
    let elem = a;

    function sumB(b) {
        elem += b;
        return sumB; 
    };

    sumB.toString = function(){
        return elem; 
    }
    
    return sumB;
}

alert( sum(1)(2) ); 
alert( sum(5)(-1)(2) ); 
alert( sum(6)(-1)(-2)(-3) ); 
alert( sum(0)(1)(2)(3)(4)(5) ); 