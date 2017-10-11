function recursionTask1() {
  var n = document.getElementById("task_1").value;
   if (+n > 0){
       alert('результат вычисления факториала: ' + factorial(+n));
   } else {
       alert('Введите число');
   }
};


function factorial(n){
    if (n == 0) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
};