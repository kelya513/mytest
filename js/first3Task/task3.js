/*
 3.Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. 
 Пример:
 function square ( x )
 { return x * x; }
 // возведение в квадрат
 console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
 console.log(map(square, [])); // []
 */

console.log("Исходный массив: [1, 2, 3, 4] . Результат: " + map(square, [1, 2, 3, 4]));
console.log("Исходный массив: [] . Результат: " + map(square, []));

function square( x ){
    return x * x;
}

function map(fun, arr) {
    var newArr = [];
    for (var i=0; i < arr.length; i++){
        newArr[i] = fun(arr[i]);
    }
    return newArr;
}
