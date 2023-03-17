'use strict';
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

//Напишите функцию byField

function byField(elem) {
    return (a, b) => a[elem] > b[elem] ? 1 : -1;
};

users.sort(byField('name'));
users.sort(byField('age'));