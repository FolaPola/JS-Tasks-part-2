'use strict';
function throttle(func, ms) {

    let isTh = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isTh) {
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); 
  
      isTh = true;
  
      setTimeout(function() {
        isTh = false; 
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
  }