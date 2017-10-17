function functionTask3() {
    var str = document.getElementById("task_3").value;
    if (str == ""){
        alert('Введите слово');
    } else {
        alert('возможные комбинации: ' + subStringCombinations(str));
    }
}

function subStringCombinations(str){
    var result = '', temp = '';

    var lengthLoop = str.length;

    for(var i = 0; i < str.length; i++){
        for(var j = 0; j <= lengthLoop; j++){
            temp = str.substr(i,j);

            if(temp != ''){
                result += temp + ', ';
            }
        }
        lengthLoop--;
    }

    return result;
};