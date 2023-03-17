'use strict';
/* Ответ: BODY 
    body.innerHTML заменяет содержимое body.
    tagName => BODY
    data выводит  содержимое текстового узла => BODY

*/

  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
