# week16
1. Напишите функцию `sumInput()`, которая:
        - Просит пользователя ввести значения, используя текстовое поле `input` и сохраняет их в массив
        - Когда пользователь нажмёт кнопку «Готово»
            - Выводит получившийся массив в отсортированном по возрастанию виде
            - Подсчитывает и возвращает сумму элементов массива
2. Напишите калькулятор расчета стоимости автомобиля в зависимости от комплектации. 
    - Должен содержать выпадающие списки, чекбоксы, радиокнопки
    - Выбор того или иного элемента должен влиять на результирующую цену (*подсказка - суммы опций и вариантов комплектации можно хранить в value соответствующих input-ов и option-ов, а потом просуммировать их в цикле*)
3. Задачи с массивами являются одним из часто встречаемых в работе программиста и, как следствие, на собеседованиях. Поэтому давай потренируемся использовать изученные методы.
- 1. Дан массив `['js', 'css', 'html']`. Выведите на экран первый элемент.
- 2. Отфильтруйте массив `[0, 1, false, 2, undefined, '', 3, null]` от нежелательных значений, таких как `false`, `undefined`, пустые строки, `0`, `null` с помощью метода `filter`.  Ожидаемый результат: `[1, 2, 3]`.
- 3. Дан массив `[[1,2], [1,2,3], [1,2,3,4]]`. Найдите индекс массива, длина которого `> 3`. Ожидаемый результат: `2`
