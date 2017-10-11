function recursionTask4() {
    var arr=[], size, result, arr_copy;
    size = Math.floor(Math.random() * 9) + 2;

    for (var i = 0; i < size-1; i++) {
        var rand = Math.floor(Math.random() * 15);
        arr.push(rand)
    }

    arr_copy = arr.slice();
    result = sumArrRec(arr_copy);
    alert('Исходный массив: '+ arr + '. Результат: ' + result);

};

function sumArrRec(arr) {
    return (arr.length == 1) ? arr[0] : arr.pop() + sumArrRec(arr);
};