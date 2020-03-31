const RL = require('readline-sync');
const axios = require('axios').default;

module.exports = async function Buy(cart) {

    for (let b = 0; b < cart.books.length; b++) {
        await axios.put(`http://localhost:3333/buy?id=${cart.books[b].book.id}`, {
            amount: cart.books[b].book.amount -= 1
        })
    }

    RL.keyInPause();s
}