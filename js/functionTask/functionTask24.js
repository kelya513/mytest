'use strict';
function functionTask24() {
    var arr=[], size, arr_copy;
    size = Math.floor(Math.random() * 9) + 2;

    for (var i = 0; i < size; i++) {
        var rand = Math.round(Math.random() * 15);
        arr.push(rand)
    }

    arr_copy = arr.slice();

    sortBubble(arr_copy);
    alert('Исходный массив: '+ arr + '. Результат: ' + arr_copy);
}

function sortBubble(arr) {
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length-i; j++){
            if (arr[j] > arr[j+1]) { //если изменить знак на < то сортировка будет по убыванию
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}