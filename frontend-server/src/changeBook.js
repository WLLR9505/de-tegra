const axios = require('axios').default;
const RL = require('readline-sync');
const Menu = require('../util/Menu');
const color = require('../util/colors');

var user_In = '';

module.exports = async function newBook() {
    var bookList = [];
    var book = {};

    await axios.get('http://localhost:3333').then((response) => {
        data = response.data;
        data.push(data.forEach(book => {
            bookList.push(`${book.title} ${book.author} - R$${book.price} [${book.amount}] `);
        }));
    });

    user_In = Menu(bookList);
    if (user_In != -1 && RL.keyInYN(`Alterar Livro?\n`)) {

        console.log('pressione ENTER para manter');
        

        book.title = RL.question('Digite o titulo do livro\n', {
            defaultInput: data[user_In].title
          });
        book.author = RL.question('Digite o nome do(s) autores\n',{
            defaultInput: data[user_In].author
          });
        book.price = RL.question(`Digite o preço do livro${color.cor_amarelo}Somente numeros usando padrao americano${color.cor_reset}\n`,{
            defaultInput: data[user_In].price
          });
        book.amount = RL.question('Digite a quantidade em estoque\n',{
            defaultInput: data[user_In].amount
          });

        await axios.put(`http://localhost:3333/edit_book?id=${data[user_In].id}`, book)
    }

}