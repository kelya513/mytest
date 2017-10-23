'use strict';
function functionTask25() {
    var arr_Contry = ['Австралия', 'Германия', 'Соединенные Штаты Америки', 'Великобритания', 'Южная Корея' ];
    alert(`Результат: ${longNameCountry(arr_Contry)}`);
}

function longNameCountry(arr) {
    var result='';

    for(var i = 0; i<arr.length; i++){
        result = (result.length > arr[i].length) ? result : arr[i];
    }

    return result;
}