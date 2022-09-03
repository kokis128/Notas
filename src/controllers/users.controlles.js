const userCtrl={};
const User=require('../models/User');


userCtrl.getUsers= async(req, res) => {
    const users =  await User.find();
    res.json(users)
};



userCtrl.createUser= async(req, res) => {

    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    

    res.json({ message: 'user created' })



};
userCtrl.updateUser= (req, res) => res.json({ massage: 'Nota - updated' });


userCtrl.deleteUser= async (req, res) => {

    await User.findByIdAndDelete(req.params.id)
    res.json('User deleted')
}

userCtrl.updateUser= async (req,res)=>{
    const {username} = req.body;

    await User.findByIdAndUpdate( req.params.id , {

        username
    })
    res.json({ massage: 'User - updated' })};



module.exports=userCtrl;