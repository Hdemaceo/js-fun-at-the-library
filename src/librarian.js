var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  greetPatron(name, morning){
    if(morning === true){
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    }
  }
  findBook(book) {
    for(var i = 0; i < this.library.length; i++){
      if(this.library[i].shelves[book.genre].title === book){
        return `Yes, we have ${book}`;
      } else {
        return `Sorry, we do not have ${book}`;
      };
    }
    // this.library.shelves[book.genre].includes(book) ? `Yes, we have ${book}` : `Sorry, we do not have ${book}`;
  }

  calculateLateFee(num){
    return Math.ceil(num * 0.25);

  }
}

module.exports = Librarian;
