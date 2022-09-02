const { Schema, model } = require('mongoose');

const userSchema = newSchema({

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true

    }}, {
    timestamps: true
});

model('User',Schema)
module.exports=model('Use');