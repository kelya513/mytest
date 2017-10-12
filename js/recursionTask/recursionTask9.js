function recursionTask9() {
    var arr=[], size, arr_copy;
    size = Math.floor(Math.random() * 9) + 2;

    for (var i = 0; i < size-1; i++) {
        var rand = Math.floor(Math.random() * 15);
        arr.push(rand)
    }

    arr_copy = arr.slice();
    quickSort(arr_copy, 0, arr_copy.length-1);
    alert('Исходный массив: '+ arr + '. Результат: ' + arr_copy);

};

function quickSort(arr, low, high) {
    var i = low;
    var j = high;
    var middle = arr[ Math.floor( ( low + high ) / 2 ) ];  // центральный, опорный элемент

    while(arr[i] < middle){ // элемент для переноса в правую часть
        ++i;
    }
    while(arr[j] > middle) { // элемент для переноса в левую часть
        --j;
    }

    if(i <= j){ // меняем местами
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        // изменяем для след шага
        i++; j--;
    }

    // рекурсивные вызовы для левой и правой части
    if(low < j){
        quickSort(arr, low, j);
    }
    if(i < high){
        quickSort(arr, i, high);
    }
}