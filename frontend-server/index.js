const Menu = require('./util/Menu')

const listBooks = require('./src/listBook');
const addBook = require('./src/addBook');
const changeBook = require('./src/changeBook');

var user_In = 0;

async function main() {
    console.clear();

    while (user_In >= 0) {

        user_In = Menu(['Listar livros', 'Cadastrar Novo Livro', 'Alterar Livro', 'SAIR']);
        
        if (user_In == 0) {
            await listBooks();
        } if (user_In == 1) {
            await addBook();
        } if (user_In == 2) {
            await changeBook();
        } else if (user_In == 3) {
            break;
        }
    }
}

main();