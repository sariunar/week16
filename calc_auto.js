let price = document.querySelector("#input-price");
let result = document.querySelector("#result");
//Возраст автомобиля
let lessThree = document.querySelector("#less_three");
let lessFive = document.querySelector("#less_five");
let lessSeven = document.querySelector("#less_seven");
let moreSeven = document.querySelector("#more_seven");
//Получатель
let individual = document.querySelector("#individual");
let entity = document.querySelector("#entity");

const deliveryToVladivostok = 220000; //Доставка во Владивосток
let customsClearance = 0; //Услуги по таможенному оформлению, СВХ, СБКТС    
let eraGlonass = 0; //Оборудование Эра-Глонасс
let recyclingFee = 0; // Утилизационный сбор  
let duty = 0;//  Таможенная пошлина 

function clickMe() {
    let price = document.querySelector("#input-price");
    let selectAuction = document.querySelector("#select-auction");
    let res = 0;
    if (price.value != '') {
        if (individual.checked) {
            customsClearance = 65000;
            eraGlonass = 50000;
            recyclingFee = 5200;
        } else {
            customsClearance = 114997;
            eraGlonass = 123000;
            recyclingFee = 1185084;
        }

        if (lessThree.checked) {
            duty = 538378;
        } else {
            duty = 3100;
        }
        let sum = Number(price.value) - Number(selectAuction.options[selectAuction.selectedIndex].value) - deliveryToVladivostok + customsClearance + eraGlonass + recyclingFee + duty;
        result.innerHTML = sum;
    } else {
        alert('Введите данные');
    }
}