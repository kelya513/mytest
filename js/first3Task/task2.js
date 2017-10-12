/*
 2.Нужна функция take(gen, x) которая вызывает функцию gen заданное число ( x ) раз и возвращает массив с результатами вызовов.
 var gen2 = sequence(0, 2);
 console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
 */

var gen2 = sequence(0, 2);
console.log("вторая задач, результат для var gen2 = sequence(0, 2);take(gen2, 5) - " + take(gen2, 5)); // [0, 2, 4, 6, 8 ]

function take(fun, cnt) {
    var resArr = [];

    for (var i=0; i < cnt; i++){
        resArr.push(fun());  // другой способ: resArr[i] = fun();
    }

    return resArr;
}

/*
 function sequence(start,step) {
     var mStart = (+start >=0 ) ? start : 0;
     var mStep = (+step >=0 ) ? step : 1;

     mStart -=mStep;

     return function counterGenerator() {
        return mStart += mStep;
     };
 }
 */