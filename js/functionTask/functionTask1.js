function functionTask1() {
    var n = document.getElementById("task_1").value;
    if (+n > 0){
        alert('Перевернутое число: ' + reverse(n));
    } else {
        alert('Введите число');
    }
}


function reverse(n){
    return String(n).split('').reverse().join('');
};