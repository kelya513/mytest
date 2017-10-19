'use strict';

// String.prototype.subStringCombinations = function() {
//         var result = [], temp = '';
//         var lengthLoop = this.length;
//
//         for(var i = 0; i < this.length; i++){
//             for(var j = 0; j <= lengthLoop; j++){
//                 temp = this.substr(i,j);
//
//                 if(temp != ''){
//                    result.push(temp);
//                 }
//             }
//             lengthLoop--;
//         }
//
//         return result;
// };
// console.log("dog".subStringCombinations());


class StrSubCombination {

    constructor(str) {
        this.str = str;
    }

    subStringCombinations() { //метод для вычисления объема
        var result = [], temp = '';
        var lengthLoop = this.str.length;

        for(var i = 0; i < this.str.length; i++){
            for(var j = 0; j <= lengthLoop; j++){
                temp = this.str.substr(i,j);

                if(temp != ''){
                    result.push(temp);
                }
            }
            lengthLoop--;
        }

        return result;
    }

}


function objectTask7() {
    //создаем новый класс
    let strSubComb = new StrSubCombination('dog');
    alert(`подмножество строки: ${strSubComb.subStringCombinations()}`);
}


