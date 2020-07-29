var books = []; //In-memory database
books.push({
  "isbn": 167,
  "title":"Harry Potter",
  "price":23.99
});
books.push({
  "isbn": 267,
  "title":"Lord of the Rings",
  "price":25.49
});

module.exports.getAllBooks = function() {
  return books;
};

var findBookIndex = function(isbn) {
	for (i = 0; i < books.length; i++) { 
		if (books[i].isbn == isbn) {
			return i;
		}
	}
	return -1;
}

module.exports.findBook = function(isbn) {
	index = findBookIndex(isbn);
	if (index != -1) {
		return books[index];
	}
	return null;
};

module.exports.updateBook = function(isbn, book) {
	index = findBookIndex(isbn);
	if (index != -1) {
		books[index] = book;
	} else {
		books.push(book);
	}
};

module.exports.deleteBook = function(isbn) {
	index = findBookIndex(isbn);
	if (index != -1) {
		books.splice(index, 1);
	}
};