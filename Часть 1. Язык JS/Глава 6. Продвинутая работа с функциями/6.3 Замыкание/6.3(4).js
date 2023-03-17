'use strict';
function sum(num) {

return function(num1) {
return num + num1; 
}}

alert( sum(1)(2) ); 
alert( sum(5)(-1));