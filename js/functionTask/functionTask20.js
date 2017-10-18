'use strict';
function functionTask20() {
    var n = +document.getElementById("task_20").value;
    if ( Math.abs(n) >= 0){
        alert('Случайная строка: ' + randomCharFun(n) );
    } else {
        alert('Некорректные данные');
    }
}

function randomCharFun(n) {
    var symbolArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result='';

    for(var i=0; i < n; i++ ){
        result += symbolArr.charAt(Math.round(Math.random() * symbolArr.length));
    }

    return result;
}