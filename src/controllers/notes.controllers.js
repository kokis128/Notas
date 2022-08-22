const notesCtrl={};


notesCtrl.getNotes=(req, res) => res.json({ message: 'Users' });
notesCtrl.createNotes=(req, res) => res.json({ message: 'User saved' });
notesCtrl.updateNotes=(req, res) => res.json({ massage: 'User - updated' });
notesCtrl.deleteNotes=(req, res) => res.json({ massage: 'User - deleted' });


module.exports=notesCtrl;