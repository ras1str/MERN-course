const {Schema, model, Types} = require('mongoose')

const schema = new Schema({

    email: {type: String, required: true, unique: true},
    pass: {type: String, required:true},
    poster: [{ type:Types.ObjectId, ref: 'Poster'}]


})

module.exports = model('User', schema)