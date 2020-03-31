const RL = require('readline-sync');
const color = require('../util/colors');
const Menu = require('../util/Menu');

class Cart {
    constructor() {
        this.books = new Array(0);
        this.total = 0
    }
    addToCart(book) {
        this.books.push({
            itemid: this.books.length + 1,
            book: book
        })
        this.getTotal();
        return 0;
    }
    removeFromCart(id) {
        this.books = this.books.filter((book) => {
            return book.itemid !== id;
        });
    }
    getTotal() {
        this.total = 0;
        for (let b = 0; b < this.books.length; b++) {
            this.total += this.books[b].book.price;
        }
        this.total = this.total.toFixed(2);
    }
    showCartBooks() {
        let menuBooks = [];
        for (let b = 0; b < this.books.length; b++) {
            menuBooks.push(`${this.books[b].book.title} - ${this.books[b].book.author} R$${this.books[b].book.price}`);
        }
        if (menuBooks.length) { //se não houver livros
            let user_In = Menu(menuBooks);
            
            if (user_In >= 0) {
                this.removeFromCart(this.books[user_In].itemid);
            }
        }
        this.getTotal();
        RL.keyInPause()
    }
}

module.exports = Cart;