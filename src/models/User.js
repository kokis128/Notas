const { Schema, model } = require('mongoose');

const userSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true

    }}, {
    timestamps: true
});

model('User',userSchema)
module.exports=model('User');