function functionTask10() {
    var n = +document.getElementById("task_10").value;
    if (Math.abs(n) >= 0){
        document.getElementById("task10_2").innerHTML = printMatrix(Math.abs(n));
    } else {
        alert('Введите размер');
    }
}

function printMatrix(n){
    var print_1=0;
    var print_row='';
    for(var i=0; i<n; i++ ){
        for(var j=0; j<n; j++){
         if (print_1==i && print_1==j){
             print_row +=' 1 ';
             print_1++;
         }else {
             print_row +=' 0 ';
         }
        }
        //console.log(print_row);
        print_row += '<br>' ;
    }
    return print_row;
}