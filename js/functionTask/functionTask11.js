function functionTask11() {
    var arr=[], size, result, arr_copy;
    size = Math.floor(Math.random() * 9) + 2;

    for (var i = 0; i < size-1; i++) {
        var rand = Math.floor(Math.random() * 15);
        arr.push(rand)
    }

    arr_copy = arr.slice();
    result = searchSecondLowGreat(arr_copy);
    result = result.length > 0 ?
        ('Результат: 2е найменьшее ' + result[0] + '. Результат: 2е найбольшее '+ result[1])
        : (' пустой массив или ошибка');

    alert('Исходный массив: '+ arr + '. '+result);

};

function searchSecondLowGreat(arr) {
    var result=[];

    if (arr.length == 0){
        return result; //путой массив
    }

    arr.sort((a, b) => { return a - b; }); //arr.sort() //сортировка массива
    console.log(arr);

    var obj ={};
    // получение уникальных значений
    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
    }

    var temp = Object.keys(obj);
    console.log(temp);

    //обработка массива уникал. значений и присвоение результата
    if (temp.length == 1){
        result.push(+temp[0], +temp[0]);
    } else if (temp.length == 2){
        result.push(+temp[1], +temp[0]);
    } else if (temp.length >= 3){
        result.push( +temp[1], +temp[temp.length-2]);
    }
    //console.log(result);

    return result;
};