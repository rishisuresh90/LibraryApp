const express = require('express');
const booksRouter = express.Router();

function router(homeNav){
    var books = [
        {
            title: 'Many Lives, Many Masters',
            author: 'Dr Brian Weiss',
            genre: 'Biography',
            img: "many lives.jpeg"
        },
        {
            title: 'The Laws of the Spirit World',
            author: 'Khorshed Bhavnagri',
            genre: 'Spirituality',
            img: "spirit world.jpeg"
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            genre: 'Romantic',
            img: "pride and prejudice.jpeg"
        },
        {
            title: 'The Diary of a Young Girl',
            author: 'Anne Frank',
            genre: 'Autobiography',
            img: "young girl.jpeg"
        },
        {
            title: 'Charlie and the Chocolate Factory',
            author: 'Roald Dahl',
            genre: 'Fantasy Fiction',
            img: "charlie.jpeg"
        }
    ]
    booksRouter.get('/', function(req,res){
        res.render("books", {
            homeNav,
            title : 'Library',
            books
        });
    });
    booksRouter.get('/add', function(req,res){
        res.render('addBook', {
            homeNav,
            title : 'Library',
        });  
    });
    booksRouter.get('/:id', function(req,res){
        const id = req.params.id
        res.render('book', {
            homeNav, 
            title : 'Library',
            book: books[id]
        });
    });
    
    return booksRouter;
}
module.exports = router;