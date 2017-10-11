function recursionTask2() {
    var a = +document.getElementById("task_2a").value;
    var b = +document.getElementById("task_2b").value;
    var result;
    if (a > 0 && b > 0){
        result = (a > b) ? gcdPos(a,b) : gcdPos(b,a);
        alert('результат вычисления НОД: ' + result);
    } else {
        alert('Введите позитивные числа');
    }
};

function gcdPos(a,b){
    console.log(a +' '+ b);
    if ( b == 0) {
        return a;
    }
    return gcdPos(b, a % b);
};