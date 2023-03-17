'use strict';
/*В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип. */

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// Что вызов alert покажет нам сейчас? Rabbit.prototype = {}; => true
//…А если код такой (заменили одну строчку)?  Rabbit.prototype.eats = false; => false 
//Или такой (заменили одну строчку)? delete rabbit.eats; => true
//Или, наконец, такой: delete Rabbit.prototype.eats; => undefined

alert( rabbit.eats ); // true

