const jsinputAdd = document.querySelector('.js-inputAdd');
const add = document.querySelector('.add');
const end = document.querySelector('.end');
let sortArr = document.querySelector('#sort');
let resSum = document.querySelector('#result');
let arr = [];
add.addEventListener('click', () => {
    if (jsinputAdd.value != '') {
        arr.push(jsinputAdd.value);
    }
    else {
        console.log('Введите корректное значение');
    }
    jsinputAdd.value = '';
});
function sumInput() {
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);

    let result = arr.reduce((sum, el) => {
        return Number(sum) + Number(el);
    });
    console.log(result);
    sortArr.innerHTML = 'Отсортированный массив = ' + arr;
    resSum.innerHTML = 'Сумма масива = ' + result;
    arr = [];
}