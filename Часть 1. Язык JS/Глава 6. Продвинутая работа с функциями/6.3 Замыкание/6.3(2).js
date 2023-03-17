'use strict';
/*Здесь объект счётчика создан с помощью функции-конструктора.

Будет ли он работать? Что покажет? */
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
  alert( counter.up() ); // 1, так как ++count = count + 1 = 1
  alert( counter.up() ); // 2, так как count = 1 + 1 = 2
  alert( counter.down() ); // 1, так как count = 2 - 1 = 1