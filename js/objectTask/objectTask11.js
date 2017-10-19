'use strict';

function getAllPropertyObject(obj)
{
    return Object.getOwnPropertyNames(obj);
}

function objectTask11() {
    // console.log(`Circle: ${getAllPropertyObject(Circle)}`);
    // console.log(`Cylinder: ${getAllPropertyObject(Cylinder)}`);
    // console.log(`Array: ${getAllPropertyObject(Array)}`);

   alert(`Circle: ${getAllPropertyObject(Circle)}`);
   alert(`Cylinder: ${getAllPropertyObject(Cylinder)}`);
   alert(`Array: ${getAllPropertyObject(Array)}`);
}
