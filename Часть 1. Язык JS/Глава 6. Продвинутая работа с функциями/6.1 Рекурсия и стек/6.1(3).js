'use strict';
function fib(n) {
    let num1 = 1;
    let num2 = 1;

    for (let i = 3; i <= n; i++) {
    let sumNum = num1 + num2;
     num1 = num2;
     num2 = sumNum;
     }
     return num2;
    }

    alert ( fib(7) );