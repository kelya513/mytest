Array.prototype.binarySearch = function(search) {
    if (this.length == 0 || (this.length==1 && this[0] != search)) { //выход из рекурсии, если нет искомого елемента
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


// function binarySearch(arr, search, first, last) {
//     if (arr.length == 0 || search < arr[first] || search > arr[last - 1] ) {
//         return null;
//     }
//     var mid = parseInt(first + (last - first) / 2);
//
//     if (arr[mid] == search){
//         return mid;
//     }
//     if (arr[mid] < search){
//         return binarySearch(arr, search, mid, last);
//     } else {
//         return binarySearch(arr, search, first, mid);
//     }
// };