'use strict';

function objectTask10() {
    var library = [
        {
            title:  'The Road Ahead',
            author: 'Bill Gates',
            libraryID: 1254
        },
        {
            title: 'Walter Isaacson',
            author: 'Steve Jobs',
            libraryID: 4264
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            libraryID: 3245
        }];

    console.log(sortLibraryObj(library));
}

function sortLibraryObj(arr) {
    return arr.sort((a, b)=>{ return a.libraryID - b.libraryID});
}