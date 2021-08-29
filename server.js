const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
app.use(cors())

app.use(express.json())
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

const { getApi, addFav, getFav, deleteFav, updateFav } = require('./controller/flowers')

mongoose.connect(`${process.env.MONGO_URL}/review`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.send('Hello Backend')
})
app.get('/api', getApi)
app.post('/add', addFav)
app.get('/fav', getFav)
app.delete('/delete/:id', deleteFav)
app.put('/update/:id', updateFav)

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) })
