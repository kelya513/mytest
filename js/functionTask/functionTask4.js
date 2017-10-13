function functionTask4() {
    var str = document.getElementById("task_4").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        alert('проверка на палиндром  ' + sortAlphabetizing(str));
    }
}

function sortAlphabetizing(str){
    return str.toLowerCase().split('').sort().join(''); //приведения к нижнему регистру, что бы соблюдался алфавитный порядок
};                                                      //sort() соритирует по коду символа