'use strict';

function objectTask3() {
    var defaultObj={
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };

    alert(ctnPropertyObject(defaultObj));
}

function ctnPropertyObject(obj) {
    var cnt=0;
    if((typeof obj === typeof {})){
        for (var key in obj) {
            cnt++;
        }
        return cnt;
    }else{
        return 'это не объект';
    }
}

