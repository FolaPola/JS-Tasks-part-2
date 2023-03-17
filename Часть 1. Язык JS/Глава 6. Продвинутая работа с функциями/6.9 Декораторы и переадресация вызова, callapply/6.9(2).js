'use strict';
function delay(f, ms) {

    return function(...args) {
        let display = this;
        setTimeout(function() {f.apply(display, args)}, ms);
    }
}