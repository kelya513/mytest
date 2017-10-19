'use strict';

// Array.prototype.arrBubbleSort = function() {
//     for (var i = 0; i < this.length; i++){
//         for (var j = 0; j < this.length-i; j++){
//             if (this[j] > this[j+1]) { //если изменить знак на < то сортировка будет по убыванию
//                 var temp = this[j];
//                 this[j] = this[j+1];
//                 this[j+1] = temp;
//             }
//         }
//     }
//     return this;
// };
// console.log([6,4,0, 3,-2,1].arrBubbleSort());

class ArrBubbleSort {

    constructor(arr) {
        this.arr = arr;
    }

    sortBubble() { //метод для вычисления объема
        for (var i = 0; i < this.arr.length; i++){
            for (var j = 0; j < this.arr.length-i; j++){
                if (this.arr[j] > this.arr[j+1]) { //если изменить знак на < то сортировка будет по убыванию
                    var temp = this.arr[j];
                    this.arr[j] = this.arr[j+1];
                    this.arr[j+1] = temp;
                }
            }
        }
        return this.arr;
    }

}

function objectTask6() {
    //создаем новый класс
    let sortBubbleArr = new ArrBubbleSort([6,4,0, 3,-2,1]);
    alert(`отсортированный массив: ${sortBubbleArr.sortBubble()}`);
}


