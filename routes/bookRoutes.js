const express = require('express');
const router = express.Router();
const Book = require('../Models/Books.js');

//Create
router.post('/', async(req,res) => {
    try{
        const book = new Book(req.body)
        await book.save();
        res.status(201).send(book);
    }catch(error){
        res.status(400).send(error);
    }
});


//Fetch all books
router.get('/', async(req,res) => {
    const books = await Book.find();
    res.send(books);
});


//Fetch one book using id
router.get('/:id', async(req,res) => {
    const book = await Book.findById(req.params.id);
    if(!book) return res.status(404).send({message: 'Not Found'});
    res.send(book);
});


//Update one book
router.put('/:id', async(req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if(!book) return res.status(404).send({message: 'Not Found'});
    res.send(book);
});

//Delete one book
router.delete('/:id', async(req,res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if(!book) return res.status(404).send({message: 'Not Found'});
    res.send(book);
});

module.exports = router;