function recursionTask1() {
  var n = document.getElementById("task_1").value;
   if (+n > 0){
       alert('Результат вычисления факториала: ' + factorial(+n));
   } else {
       alert('Введите число');
   }
};

//Формула n! = n * n-1 * n-2 * ... * 1
function factorial(n){
    if (n == 0) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
};