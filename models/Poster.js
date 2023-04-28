const { Schema, model, Types } = require('mongoose')


const schema = new Schema({

    author: { type: Types.ObjectId, ref:'User', required: true },
    title: { String, required: true },
    money: { Number, required: true },
    comment: { String, required: true },
    phone: { Number, required: true },
    type: {type: Types.ObjectId, ref:'Type', required:true},
    kidnsales: {type: Types.ObjectId, ref:'Kindsales', required:true}


})

module.exports = model('Poster', schema)