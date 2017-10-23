'use strict';

function arrayTask29(){

    console.log(`результат findLongSubstring(["Z", "A"], 2): ${numStringRangeArr(["Z", "A"], 2)}`);
    console.log(`результат findLongSubstring(['a', "z"], 2): ${numStringRangeArr(['a', "z"], 2)}`);
    console.log(`результат findLongSubstring([0, 25], 5): ${numStringRangeArr([0, 25], 5)}`);
}

function numStringRangeArr(arr_range, step) {
    let st_r = arr_range[0],
        end_r = arr_range[1],
        res = [];
    if ((step === 0 ) || (typeof st_r != typeof end_r )){
        return 'error in input data';
    }

    step = end_r < st_r ? -step : step;

    if (typeof st_r == "number"){

      while (step < 0 ? end_r <= st_r : end_r >= st_r ){
          res.push(st_r);
          st_r += step;
      }

    }else if (typeof st_r == "string"){

        if ( st_r.length != 1 || end_r.length != 1){
            return 'error in input data';
        }

        let st_rs = st_r.charCodeAt(0),
            end_rs = end_r.charCodeAt(0);

        while (step < 0 ? end_rs <= st_rs : end_rs >= st_rs ){
            res.push(String.fromCharCode(st_rs));
            st_rs += step;
        }

    }else {
        return 'error in input data';
    }

    return res;

}
