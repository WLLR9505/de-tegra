const axios = require('axios').default;
const RL = require('readline-sync');
const Menu = require('../util/Menu');
const color = require('../util/colors');

var user_In = '';

module.exports = async function ListBooks() {
    var bookList = [],
    data;
    
    await axios.get('http://localhost:3333').then((response) => {
        data = response.data;
        data.push(data.forEach(book => {
            bookList.push(`${book.title}${book.author} - R$${book.price} [${book.amount}]`);
        }));
    })

    user_In = Menu(bookList);
    if (user_In != -1 && RL.keyInYN(`Deletar Livro?\n`)) {
        await axios.delete(`http://localhost:3333/delete_book?id=${data[user_In].id}`).then((response) => {
            console.log('deletado');
        });
        RL.keyInPause();
    }
}


