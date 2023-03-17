'use strict';
/*Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в 
своём свойстве calls.
Каждый вызов должен сохраняться как массив аргументов. */

function work(a, b) {
  alert( a + b );
}

function spy(func) {

    decorator.calls = [];
    return decorator;
    
    function decorator(...args) {
      decorator.calls.push(args);
      return func.apply(this, args);
    }
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9