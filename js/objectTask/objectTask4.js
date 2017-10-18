'use strict';

function objectTask4() {
    var library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }];

    progressLibraryObj(library);
}

function progressLibraryObj(arr) {
    for (var i = 0; i < arr.length; i++){
        if((typeof arr[i] === typeof {})){
            var progress = arr[i].readingStatus ? 'Прочитана' : 'Не была прочитана';
            console.log( progress + ' книга '+ arr[i].title +' автора ' + arr[i].author);
        }else{
            console.log( 'это не объект');
        }
    }
}