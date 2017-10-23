'use strict';

function arrayTask27(){
    var library = [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    var library_copy = [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    console.log('исх. массив:');
    console.log(library);
    console.log(`удаление propertyDeleteArray(library_copy, 'title')`);
    propertyDeleteArray(library_copy,'title');
    console.log(library_copy);

}

function propertyDeleteArray(arr,propKey) {
    for(var val of arr){
        if (val.hasOwnProperty(propKey)){
            delete val[propKey];
        }
    }
}
