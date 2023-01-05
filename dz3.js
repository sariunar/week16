/*1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.

2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от нежелательных значений, таких как `false`, `undefined`, пустые строки, `0`, `null` с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`.

3. Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива, длина которого `> 3`. Ожидаемый результат: `2` */

let arr = ['js', 'css', 'html'];
alert(arr[0]);

let arr2 = [0, 1, false, 2, undefined, '', 3, null];
alert(arr2.filter(el => el != false && el != undefined && el != '' && el != 0 && el != null));

let arr3 = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
alert(arr3.findIndex(el => el.length > 3));