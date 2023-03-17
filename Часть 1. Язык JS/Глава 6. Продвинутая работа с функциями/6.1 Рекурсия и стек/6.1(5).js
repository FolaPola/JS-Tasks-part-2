'use strict';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
        }
    }
    };

//Решение с использованием цикла

function printList(list) {
    
    let arr = [];

    while (list) {
        arr.push(list.value);
        list = list.next;
    }

    arr.reverse()
    return arr.forEach(alert);

}

printList(list);
// Решение с использованием рекурсии
function printList1(list) {
  
if (list.next != null) {
    printList1(list.next);  
} 

console.log(list.value);
}
    
printList1(list); 