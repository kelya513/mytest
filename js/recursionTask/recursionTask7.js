function recursionTask7() {
    var n = +document.getElementById("task_7").value;
    var result;

    if ( Math.abs(n) >= 0){
        result =  checkEvenNumbRec(n) ? 'четное' : 'нечетное' ;
        alert('Число ' + result );
    } else {
        alert('Неккоректрые данные');
    }
};

function checkEvenNumbRec(num) {
    if (num < 0){ //отрицательное значение => положительное
        num = Math.abs(num);
    };
    if (num == 0){
        return true; //если нет остатка то число парное
    } if (num == 1) {
        return false; //в остатке 1 - число не парное
    } else {
        num -=2;
        return checkEvenNumbRec(num);
    }
}