function createLibrary(name, shelves){
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
//     if(book.genre === "fantasy"){
//       library.shelves.fantasy.push(book)
//     } else if(book.genre === "fiction") {
//       library.shelves.fiction.push(book)
//     } else if(book.genre === "nonFiction") {
//       library.shelves.nonFiction.push(book)
//   }
//   return library;
// }
}

function checkoutBook(library, book) {
  var fantasy = library.shelves.fantasy;
  var fiction = library.shelves.fiction;
  var nonFiction = library.shelves.nonFiction;
  for(var i = 0; i < fantasy.length; i++){
    if(fantasy[i].title === book){
      fantasy.splice(i, 1)
      return `You have now checked out ${book} from the ${library.name}`;
    }
  }
  for(var i = 0; i < fiction.length; i++){
    if(fiction[i].title === book){
      fiction.splice(i, 1)
      return `You have now checked out ${book} from the ${library.name}`;
    }
  }
  for(var i = 0; i < nonFiction.length; i++){
    if(nonFiction[i].title === book){
      nonFiction.splice(i, 1)
      return `You have now checked out ${book} from the ${library.name}`;
    }
}
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`;
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
