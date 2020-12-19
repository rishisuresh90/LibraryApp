const express = require('express');
const authorsRouter = express.Router();

function router(homeNav){
var authors = [
    {
        name: 'Henry James',
        genre: 'Novel',
        img: "henry james.jpeg"
    },
    {
        name: 'Ernest Hemingway',
        genre: 'Fiction',
        img: "ernest.jpeg"
    },
    {
        name: 'Arundhati Roy',
        genre: 'Fiction',
        img: "arundhati roy.jpeg"
    },
    {
        name: 'Arthur Canon Doyle',
        genre: 'Detective',
        img: "arthur.jpeg"
    },
    {
        name: 'Harper Lee',
        genre: 'Literature',
        img: "harper lee.jpeg"
    }
]
authorsRouter.get ('/', function(req,res){
    res.render("authors",
    {
        homeNav,
        title : 'Library',
        authors
    });
});

authorsRouter.get('/add', function(req,res){
    res.render('addAuthor', {
        homeNav,
        title : 'Library',
    });  
});

authorsRouter.get('/:id', function(req,res){
    const id = req.params.id
    res.render('author',{
        homeNav, 
        title : 'Library',
        author : authors[id]
    });
});

    return authorsRouter;
}
module.exports = router;
