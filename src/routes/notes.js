const { Router } = require('express')
const router = Router();
const {getNotes,getNote,createNotes,updateNotes,deleteNotes}=require('../controllers/notes.controllers')
router.route('/')

    .get(getNotes)
    .get(getNote)
    // .get((req,res)=>res.send('GET - Notes Routes'))
    // .post((req,res)=>res.send('POST - Notes Routes'))
    .post(createNotes)

router.route('/:id')
    .put(updateNotes)
    .delete(deleteNotes)


module.exports = router;