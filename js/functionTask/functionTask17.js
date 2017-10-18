function functionTask17() {
    var str = document.getElementById("task_17").value;
    if (str == ""){
        alert('Введите строку');
    } else {
        cntSymbol17(str);
        alert('уникальные символы и их количество выведенно в консоле');
    }
};

function cntSymbol17(str) {
    var resCntChar = {};
    str.split("").map(ch => resCntChar[ch] = isNaN(resCntChar[ch]) ? 1 : (resCntChar[ch] += 1)) ;
    console.log(resCntChar);
    return resCntChar;
};