'use strict';
//Используя setInterval.

function printNumbers(from, to){
    while (from <= to) {
        alert(from++);
    }
}
let timerId = setInterval(printNumbers, 1000, 2, 7);

//setTimeout

function printNumbers1(from, to){

    setTimeout(function time() {
     alert(from);
     if( from < to) {
         setTimeout(time, 1000);
     } from++;
    }, 1000);
 }
 printNumbers1(5, 10);