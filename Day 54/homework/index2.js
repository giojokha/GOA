const books = [
    { name: "Book 1", price: 25 },
    { name: "Book 2", price: 30 },
    { name: "Book 3", price: 20 },
    { name: "Book 4", price: 35 },
    { name: "Book 5", price: 28 },
    { name: "Book 6", price: 22 },
    { name: "Book 7", price: 32 },
    { name: "Book 8", price: 27 },
    { name: "Book 9", price: 24 },
    { name: "Book 10", price: 18 }
];

let discountPercentage = 0;
if (books.length >= 5 && books.length < 10) {
    discountPercentage = 10;
} else if (books.length === 10) {
    discountPercentage = 20;
}

books.forEach(function(book) {
    var discountedPrice = book.price * (1 - discountPercentage / 100);
    book.discountedPrice = discountedPrice.toFixed(2);
});

books.forEach(function(book, index) {
    console.log(`Book ${index + 1}: ${book.name}, Price: $${book.price}, Discounted Price: $${book.discountedPrice}`);
});