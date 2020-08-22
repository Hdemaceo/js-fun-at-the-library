

function shelfBook(book, shelf){
  if(shelf.length < 3){
    return shelf.unshift(book)
  }
}

function unshelfBook(name, shelf){
  for(var i = 0; i < shelf.length; i++){
    if(shelf[i].title === name){
      shelf.splice(i, 1);
    }
  }
  return shelf
}

function listTitles(shelf){
  var bookTitles = "";
  for(var i = 0; i < shelf.length; i++){
    if(i !== shelf.length-1){
        bookTitles += shelf[i].title + ", ";
    } else {
      bookTitles += shelf[i].title
    }
  }
  return bookTitles;
}

function searchShelf(shelf, name) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === name){
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
