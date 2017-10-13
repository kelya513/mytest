function functionTask5() {
    var str = document.getElementById("task_5").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        document.getElementById("task_5").value =  firstCharToUpperCase(str);
    }
}

function firstCharToUpperCase(str){
    var tempArr = str.split(' ');

    for(var i = 0; i<tempArr.length; i++){
        tempArr[i] = tempArr[i].charAt(0).toUpperCase() + tempArr[i].substr(1);
    }

    str = tempArr.join(' ');
    return str;
};           