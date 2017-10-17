'use strict';

function functionTask15() {
    var num = +document.getElementById("task_15_1").value;
    var pow = +document.getElementById("task_15_2").value;

    if ( pow >= 0 && num >= 0){
        alert('результат: ' + myFuncPow(num, pow) );
    } else {
        alert('Введите целое положительное число');
    }
}

function myFuncPow(num, pow) {
    /*
    три способа:
    1) рекурсия (реализована в другом блоке задач)
    2) встроенная функция Math.pow(число, степень)
    3) через цикл
     */

    var result=1;

    if (pow === 0 && num !== 0){
        return 1;       //любое число в 0 степени = 1
    }else if (num === 0 && pow !== 0){
        return 0;       //ноль в любой степени = 0
    } else if (num === 0 && pow === 0 ){
        return NaN ;    //0 в степени 0 не имеет смысле и считается неопределенным
    }

    for(var i= 1; i <= pow; i++){
        result *=num;
    }

    return result;
}