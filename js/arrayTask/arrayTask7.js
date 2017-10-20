'use strict';

function arrayTask7() {
    var arr=[], size;
    size = Math.floor(Math.random() * 9) + 5;
    var min=-15,max=30;
    for (var i = 0; i < size; i++) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        arr.push(rand);
    }

    console.log(`исходный массив ${arr}`);
    console.log(`отсортированный ${sortArrayMy(arr)}`);

}

function sortArrayMy(arr) {
   // return arr.sort((a,b)=>{return a-b;}); //самое простое решение

    //GnomeSort -алгоритм сортировки, похожий на сортировку вставками, но в отличие от последней перед
    // вставкой на нужное место происходит серия обменов, как в сортировке пузырьком
    var n = arr.length, i = 1, j = 2;
    while (i < n)
    { if (arr[i-1] < arr[ i ]){ i = j; j++; }
    else
    { var t = arr[i-1]; arr[i-1] = arr[ i ]; arr[ i ] = t;
        i--;
        if (i == 0){ i = j; j++; }
    }
    }
    return arr;

}
