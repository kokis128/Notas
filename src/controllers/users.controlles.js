const userCtrl={};

userCtrl.getUsers=(req, res) => res.json({ message: 'GET Users' });
userCtrl.createUser=(req, res) => res.json({ message: 'Note saved' });
userCtrl.updateUser=(req, res) => res.json({ massage: 'Nota - updated' });
userCtrl.deleteUser=(req, res) => res.json({ massage: 'Nota - deleted' });

module.exports=userCtrl;