function recursionTask6() {
    var n = +document.getElementById("task_6").value;

    if ( n > 0){
        alert('Первые : ' + n + ' чисел Фибоначи: ' + fiboSeriesRec(n) );
    } else {
        alert('Некорректные данные');
    }
};

//Последовательность чисел Фибоначчи имеет формулу Fn = Fn-1 + Fn-2
function fiboSeriesRec(n) {
    if (n === 1) {
        return [0, 1]; // первые 2 элемент серии
    }
    else{
        var list = fiboSeriesRec(n - 1); //идем в начало серии для создания массива и вычесления след. элементов
        list.push(list[list.length - 1] + list[list.length - 2]);
        return list;
    }
}

