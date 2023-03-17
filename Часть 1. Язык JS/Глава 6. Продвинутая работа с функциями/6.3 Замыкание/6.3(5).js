'use strict';

let arr = [1, 2, 3, 4, 5, 6, 7];
  
function inBetween(a, b) {
    return function(x) {
        if(a <= x && b >= x) return x;
     };
}

alert( arr.filter(inBetween(3, 6)) );

function inArray(array) {
    return function (x) {
        for (let elem of array) {
            if(elem == x) return x;
        }
    }
  };

alert( arr.filter(inArray([1, 2, 10])) );