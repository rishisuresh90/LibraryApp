const express = require('express');
const signinRouter  = express.Router();

function router(indexNav){
    signinRouter.get('/', function(req,res) {
        res.render("signIn", {
            indexNav,
            title : 'Library',    
        }); 
           
    });
    return signinRouter;
};
module.exports = router;
