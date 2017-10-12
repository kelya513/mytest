Array.prototype.binarySearch = function(search) {
    if (this.length == 0 || (this.length==1 && this[0] != search)) {
        return NaN;
    }
    var mid = parseInt(this.length/ 2);

    if (this[mid] == search){
        return mid;
    }
    if (this[mid] < search){
        return mid + this.slice(mid,this.length).binarySearch(search);
    } else {
        return this.slice(0, mid).binarySearch(search);
    }
};

function recursionTask8() {
    var testArray= [1,3,5,6,7,8,10];
    var n = +document.getElementById("task_8").value;

    if ( Math.abs(n) >= 0){
        alert('Индекс ' + testArray.binarySearch(n) );
    } else {
        alert('Некорректные данные');
    }
};