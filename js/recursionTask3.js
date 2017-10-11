function recursionTask3() {
    var a = +document.getElementById("task_3a").value;
    var b = +document.getElementById("task_3b").value;
    var result;
    if ((a > 0) && (b > 0) && (b - a >= 2)){
        result = range(a,b);
        alert('диапазон: ' + result);
    } else {
        alert('Неккоректрые данные');
    }
};

function range(st, en){
    if ( (en - st) === 2) {
        return [st+1]
    } else {
        var list = range(st, en - 1);
        list.push(en-1);
        return list;
    }
}