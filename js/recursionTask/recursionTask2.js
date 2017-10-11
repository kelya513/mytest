function recursionTask2() {
    var a = +document.getElementById("task_2a").value;
    var b = +document.getElementById("task_2b").value;
    var result;
    if (a > 0 && b > 0){
        result = (a > b) ? gcdPos(a,b) : gcdPos(b,a);
        alert('Результат вычисления НОД: ' + result);
    } else {
        alert('Введите позитивные числа');
    }
};

//Алгоритм Евклида
function gcdPos(a,b){
    return ( b == 0) ?  a : gcdPos(b, a % b);
};