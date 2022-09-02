
const Note=require('../models/Note');

const notesCtrl={};


notesCtrl.getNotes=async (req, res) => {

    console.log(req.params.id)
    
    const notes=await Note.find(); //me devuelve un array con todas las notas[{},{},{}]
    res.json(notes);


};
notesCtrl.getNote = async (req, res) => {  
    
    const note=await Note.findById(req.params.id); //me devuelve un array con todas las notas[{},{},{}]
    res.json(notes);
};
notesCtrl.createNotes= async (req, res) => {
  
    const {title,content,date,author}=req.body;
    const newNote = new Note({
        title:title,
        content:content,
        date:date,
        author:author
    })
    console.log(newNote);
    await newNote.save();
};

notesCtrl.updateNotes= async(req, res) => {  
    
    console.log(req.params.id,req.body)
    const {title,content,author}=req.body;
    Note.findByIdAndUpdate(req.params.id , {

        title,
        author,
        content,

    })
    
    
    res.json({ massage: 'User - updated' })};



notesCtrl.deleteNotes= async(req, res) => {

    const note=await Note.findByIdAndDelete(req.params.id); //me devuelve un array con todas las notas[{},{},{}]
    
    res.json({ massage: 'User - deleted' })

};


module.exports=notesCtrl;