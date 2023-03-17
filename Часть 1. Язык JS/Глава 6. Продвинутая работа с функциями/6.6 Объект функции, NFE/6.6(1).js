'use strict';

function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }
    
    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
}

alert( counter() ); 
alert( counter() ); 

counter.set(10); 

alert( counter() );

counter.decrease();