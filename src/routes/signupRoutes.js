const express = require('express');
const signupRouter  = express.Router();

function router(indexNav){
    signupRouter.get('/',function(req,res){
        res.render("signUp", {
            indexNav,
            title : 'Library',
        });
    });
    return signupRouter;
}
module.exports = router;




