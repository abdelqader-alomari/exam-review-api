const axios = require('axios');

const { flowers } = require('../model/flower.model')

const getApi = (req, res) => {
    axios.get('https://flowers-api-13.herokuapp.com/getFlowers').then(flower => res.send(flower.data))
}

const addFav = (req, res) => {
    const { name, photo, instructions, email } = req.body
    const newFlower = new flowers({
        name: name,
        photo: photo,
        instructions: instructions,
        email: email
    })
    console.log(newFlower)
    newFlower.save()
}

const getFav = (req, res) => {
    const { email } = req.query
    flowers.find({ email: email }, (error, data) => {
        error ? res.send(error) : res.send(data)
    })
}

const deleteFav = (req, res) => {
    const { id } = req.params
    console.log(id)
    flowers.deleteOne({ _id: id }, (error, data) => { })
    flowers.find({}, (error, data) => res.send(data))
}

const updateFav = (req, res) => {
    const { id } = req.params
    const { name, photo, instructions } = req.body;
    flowers.findByIdAndUpdate(
        { _id: id }, {
        name: name,
        photo: photo,
        instructions: instructions
    }, { new: true },
        (err, data) => res.send(data)
    )
}


module.exports = { getApi, addFav, getFav, deleteFav, updateFav }