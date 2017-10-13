function functionTask7() {
    var str = document.getElementById("task_7").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        alert('в этой строке ' + cntVowels(str) + ' гласных букв');
    }
}

function cntVowels(str){
    var cnt=0;

    //var vowels_en = 'EeYyIiOoAa';
    //var vowels_ru = 'аАеЕёЁиИоОуУыЫэЭюЮяЯ';
    var vowels = 'EeYyIiOoAaаАеЕёЁиИоОуУыЫэЭюЮяЯ';

    for(var i=0; i < str.length; i++){
        //if(vowels_en.indexOf(str[i]) != -1 || vowels_ru.indexOf(str[i]) != -1){
        if(vowels.indexOf(str[i]) != -1){
           cnt++;
        }
    }

    return cnt;
}