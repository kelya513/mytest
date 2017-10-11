function recursionTask4() {
    var arr=[], size, result, arr_copy;
    size = Math.floor(Math.random() * 9) + 2;

    for (var i = 0; i < size-1; i++) {
        var rand = Math.floor(Math.random() * 15);
        arr.push(rand)
    }

    arr_copy = arr.slice();
    result = sumArrRec(arr_copy);
    alert('исходный массив: '+ arr + '. Результат: ' + result);

};

function sumArrRec(arr) {
    if (arr.length == 1){
        return arr[0];
    } else {
        return arr.pop() + sumArrRec(arr)
    }
}