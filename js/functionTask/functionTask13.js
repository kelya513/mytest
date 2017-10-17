'use strict';

function functionTask13() {
    var n = +document.getElementById("task_13").value;
    if ( n > 0){
        alert('кофициенты числа: [' + itNumPrefect(n) + ']' );
    } else {
        alert('Введите целое положительное число');
    }
}

function itNumPrefect(n){
    var arrDiv = [];

    for (var i = 1; i <= n; i++) {
        if (n % i == 0){
            arrDiv.push(i);
        }
    }

    return arrDiv;

}