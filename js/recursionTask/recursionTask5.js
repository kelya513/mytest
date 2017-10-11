function recursionTask5() {
    var n = document.getElementById("task_5").value;
    var arr=n.split(',');

    if ( +arr[0] > 0 && +arr[1] > 0){
        alert('Результат вычисления числа в степени: ' + expNum(+arr[0], +arr[1]) );
    } else {
        alert('Неккоректрые данные');
    }
};

//по аналогии с вычислением факториала
function expNum(x,y) {
    return (y == 1 ) ? x : x*expNum(x, --y);
};