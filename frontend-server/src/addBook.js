const axios = require('axios').default;
const RL = require('readline-sync');
const Menu = require('../util/Menu');
const color = require('../util/colors');

var user_In = '';

module.exports = async function changeBook() {
    var book = {
        title: "",
        author: "",
        price: 0,
        amount: 0
    }


    book.title = RL.question('Digite o titulo do livro\n');
    book.author = RL.question('Digite o nome do(s) autores\n');
    book.price = RL.question(`Digite o preco do livro ${color.cor_amarelo}Somente numeros usando padrao americano${color.cor_reset}\n`);
    book.amount = RL.question('Digite a quantidade em estoque\n');

    if (user_In != -1 && RL.keyInYN(`Adicionar Livro?\n`)) {
        await axios.post(`http://localhost:3333/new_book`, book).then((response) => {
            console.log('livro adicionado');
        });
        RL.keyInPause();
    }
}