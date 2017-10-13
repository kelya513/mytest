function functionTask8() {
    var n = +document.getElementById("task_8").value;
    if (Math.abs(n) >= 0){
        alert('это число ' + (itNumPrime(n) ? 'простое' : 'не является простым'));
    } else {
        alert('Введите число');
    }
}

function itNumPrime(n){
    if (n == 0 || n==1){ // 0 и 1 не являются простыми
        return false;
    }

    for (var i = 2; i < n; i++) {
        if (n % i == 0){
            alert('делится на ' + i);
            return false;
        }
    }

    return true;
}