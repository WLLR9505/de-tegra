const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/new_book', async (req, res) => {  // Insere livros
    const { title, author, price, amount } = req.body;

    await connection('books').insert({
        title,
        author,
        price,
        amount
    });

    console.log({
        title,
        author,
        price,
        amount
    });
    

    return res.json({title});
})

routes.put('/edit_book', async (req, res) => { // Alterar livro indicado pelo ID
   const { id } = req.query;
   const { title, author, price, amount } = req.body;

   console.log(id);

    await connection('books').where('id', '=', id).update({ title, author, price, amount })

   return res.json();
})


routes.delete('/delete_book', async (req, res) => { // Deletar livro indicado pelo ID
    const { id } = req.query;

    console.log(id);
    
    await connection('books').where('id', '=', id).delete();

    return res.json();
})

routes.get('/', async (req, res) => { //Lista de Livros
    const books = await connection('books').select('*');

    return res.json(books)
})

module.exports = routes;