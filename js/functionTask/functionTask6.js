function functionTask6() {
    var str = document.getElementById("task_6").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        alert('Самое длинное слово: ' + searchLongWords(str));
    }
}

function searchLongWords(str){
    var tempArr = str.split(' ');
    var result='';

    for(var i = 0; i<tempArr.length; i++){
        var temp = tempArr[i].replace(/[^a-zA-Zа-яА-ЯЄ-Їa-zа-я0-9]/g, ''); // split разобъет на слова со знаками препинания(если они есть)
        result = (result.length > temp.length) ? result : temp;
    }

    return result;
};