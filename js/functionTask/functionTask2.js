function functionTask2() {
    var str = document.getElementById("task_2").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        alert('проверка на палиндром  ' + checkPalindrome_1(str));
    }
}

//первый способ
function checkPalindrome_1(str){
    var tempArr, text, reverseText;

    if (str == "" ){ //если вызов не по клику на кнопку
        return false;
    }

    tempArr = str.split(/[:; ,.-_/*|\\()`'"?%@$^&<!=+>-]/); // убераем разделители из строки
    text = tempArr.join('').toLowerCase(); //собираем строку
    reverseText = text.split('').reverse().join(''); //переворачиваем строку

    if (text == reverseText){ //если строки одинаковыке, то это палиндром
            return true;
    }else {
      return false;
    }

};

//второй способ
function checkPalindrome_2(str){
    var tempArr, text, reverseText;
    if (str == "" ){ //если вызов не по клику на кнопку
        return false;
    }

    // регулярное выражение для "вытаскивания" только букв и цифр // приведенеие к одному регистру
    text = str.replace(/[^a-zA-Zа-яА-Я0-9]/g, '').toLowerCase();
    //console.log(text);

    // переворот строки
    reverseText = text.split('').reverse().join(''); //переворачиваем строку
    //console.log(reverseText);

    // проверка на сходство
    if (text == reverseText){ //если строки одинаковыке, то это палиндром
        return true;
    }else {
        return false;
    }

};