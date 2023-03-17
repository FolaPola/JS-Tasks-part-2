'use strict';
/*Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table". => document.getElementById('age-table')
Все элементы label внутри этой таблицы (их три). => document.querySelectorAll('label');
Первый td в этой таблице (со словом «Age»). => document.querySelector('tr > td')
Форму form с именем name="search". => document.querySelector('body > form')
Первый input в этой форме. => form.querySelector('input')
Последний input в этой форме. => document.querySelector('form[name="search"] > input:last-child')*/ 
