'use strict';
//вариант решения c использованием цикла.
function sumTo1(int) {
    let sum = 0

    for (let i = 0; i <= int; i++) {
    sum += i;
    }

    return sum;
}
    alert(sumTo1(2));

//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo2(n) {
    if (n == 1) {
        return n;
    } else {
        return n += sumTo(n - 1);
    }
}
alert (sumTo2(100));

//С использованием формулы арифметической прогрессии
function sumTo3(num1, num2) {
    let sumInt = (num1 + num2)/2 * num2;
    return sumInt;
}

alert(sumTo3(1, 100));

/* Быстрее всего будет решение с формулой арифметической прогрессии. Т.к. использует
минимум операций для решения. 

На втором месте цикл, так как по сравнению с рекурсией не использует дополнительных
вычислительных затрат 

На третьем месте - метод с рекурсией 

Максимальная глубина рекурсии ограничена движком JavaScript, так что как для большинства 
из них 100000 вызовов – за пределами возможностей*/

