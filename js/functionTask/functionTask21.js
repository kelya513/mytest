'use strict';

function functionTask21() {
    console.log(subset([1, 2, 3], 2));
}

function subset(arr, len) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    };
    var all = [];
    //for (var i = min; i < arr.length; i++) {
        fn(len, arr, [], all);
    //}
    //all.push(arr);
    return all;
}

//алгоритм основан на использовании кодов Грея
// function subset2(arr, arr_size){
//     var result_set = [],
//         result;
//      var i;
//     for(var j = 0; j < Math.pow(2, arr.length); j++){ // 2^len комбинаций
//         result = [];
//         i = arr.length - 1;
//         do{
//             if( (j & (1 << i)) !== 0) {
//                 result.push(arr[i]);
//             }
//         }  while(i--);
//
//         if( result.length >= arr_size){ //если поставить == , то будет нужная длина
//             result_set.push(result);
//         }
//     }
//
//     return result_set;
// }