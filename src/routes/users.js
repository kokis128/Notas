const {Router} = require('express')
const router = Router();

router.route('/')
        .get((req,res)=>res.send('Users Routes'))
        // .post()
        // route.route('/:id')
        // .put()
        // .delete()
        

module.exports=router;