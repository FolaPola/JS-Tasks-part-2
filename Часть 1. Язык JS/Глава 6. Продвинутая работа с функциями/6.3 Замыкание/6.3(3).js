'use strict';
/*Посмотрите на код. Какой будет результат у вызова на последней строке? */
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // будет ошибка, так как sayHi() находится внутри условия if