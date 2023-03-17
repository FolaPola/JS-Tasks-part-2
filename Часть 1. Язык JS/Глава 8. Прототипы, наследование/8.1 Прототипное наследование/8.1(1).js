'use strict';
/*В приведённом ниже коде создаются и изменяются два объекта.
Какие значения показываются в процессе выполнения кода? */
//Должно быть 3 ответа.

let animal = {
    jumps: null
  };

  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  alert( rabbit.jumps ); // ? true, т.к. jumps: true
  
  delete rabbit.jumps;
  
  alert( rabbit.jumps ); // ? null, т.к. jumps: null (из-за наследования от animal{})
  
  delete animal.jumps;
  
  alert( rabbit.jumps ); // ? undefined, т.к. кругом удалили это свойство