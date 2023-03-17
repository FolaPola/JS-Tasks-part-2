'use strict';

function sayHi() {
    alert( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "Вася"
  });
  
  alert( bound.test ); // что выведет? почему?
  /*Выведет ошибку, так как bound был передан объект 
  {
    name: "Вася"
  } 
  */