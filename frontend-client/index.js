const Menu = require('./util/Menu');

const ListBooks = require('./src/listBooks');
const Cart = require('./src/cart');
const Buy = require('./src/buy');


var user_In = 0;
var user_Cart = new Cart();

async function main() {
    console.clear();

    while (user_In >= 0) {

        user_In = Menu(['Listar Livros',
        `Visualizar Carrinho : ${user_Cart.books.length} | R$${user_Cart.total}`,
        'Finalizar Compra',
        'SAIR']);
    
        if (user_In == 0)
            await ListBooks(user_Cart);
        else if (user_In == 1)
            user_Cart.showCartBooks();
        else if (user_In == 2) {
            if (user_Cart.total > 0) 
                await Buy(user_Cart);
            else {
                console.log('carrinho vazio');
            }
        }
        else if (user_In == 3)
            break;
    }
}

main();