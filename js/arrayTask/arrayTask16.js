'use strict';

function arrayTask16() {

    console.log('диапазон: 2000 - 2012');
    console.log(findLeapYears(2000, 2012));

}

function findLeapYears(st, end) {
    var result = [];
    for( var i = st; i<= end; i++){
        if (isLeapYear(i)){
            result.push(i);
        }
    }
    return result;
}

// вспомогательная функция для определения високостного года
function isLeapYear(year) {
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
}

