function recursionTask3() {
    var a = +document.getElementById("task_3a").value;
    var b = +document.getElementById("task_3b").value;
    var result;
    if ((a > 0) && (b > 0) && (b - a >= 2)){
        result = range(a,b);
        alert('Диапазон: ' + result);
    } else {
        alert('Некорректные данные');
    }
};

//начальное и конечное значение в диапазон не входят
function range(st, en){
    if ( (en - st) === 2) { //минимальная разница для получения диапазона (2,4 => 3)
        return [st+1]; //первый элемент масива диапазонов
    } else {
        var list = range(st, en - 1);
        list.push(en-1);
        return list;
    }
};