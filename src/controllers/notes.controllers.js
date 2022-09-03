
const Note=require('../models/Note');

const notesCtrl={};


notesCtrl.getNotes=async (req, res) => {

    console.log(req.params.id)
    
    const notes = await Note.find(); //me devuelve un array con todas las notas[{},{},{}]
    res.json(notes);


};
notesCtrl.getNote = async (req, res) => {  
    
    const note = await Note.findById(req.params.id); //me devuelve un elemento con la nota buscada]
    console.log(req.params.id)
    res.json(note);
};
notesCtrl.createNotes= async (req, res) => {
  
    const {title,content,date,author}=req.body;
    const newNote = new Note({
        title:title,
        content:content,
        date:date,
        author:author
    })
    await newNote.save();
    res.json({message:'note Saved'})
    console.log(newNote);
   
};

notesCtrl.updateNotes= async(req, res) => {  
    
    
    const {title,content,author}=req.body;
    await Note.findByIdAndUpdate(req.params.id , {

        title,
        content,
        author
        

    })
    console.log(req.params.id, req.body)
    
    
    res.json({ massage: 'Nota - updated' })};



notesCtrl.deleteNotes= async(req, res) => {

    const note=await Note.findByIdAndDelete(req.params.id); 
    res.json({ massage: 'User - deleted' })

};


module.exports=notesCtrl;