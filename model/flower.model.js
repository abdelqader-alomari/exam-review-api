const mongoose = require('mongoose')

const flowerSchema = new mongoose.Schema({
    name: String,
    photo: String,
    instructions: String,
    email: String
})
const flowers = mongoose.model('flowers', flowerSchema)


module.exports = { flowers }