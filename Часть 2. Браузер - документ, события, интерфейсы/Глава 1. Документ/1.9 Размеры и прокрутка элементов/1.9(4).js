'use strict';
/*В чём отличие между getComputedStyle(elem).width и elem.clientWidth?
Укажите хотя бы 3 отличия, лучше – больше. 
1. getComputedStyle - CSS-свойства width/height зависят от box-sizing, которое определяет CSS-ширина и высота.
2. Во-вторых, CSS свойства width/height могут быть равны auto
3. elem.clientWidth - даёт конкретное значение, что и нам нужно в JS
\
*/