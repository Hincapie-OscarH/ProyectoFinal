import mongoose from 'mongoose'


const atlas = "mongodb+srv://jonathanaguilera2021:1010*@cluster0.nayfa.mongodb.net/FourElements?retryWrites=true&w=majority"


mongoose.connect(atlas, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('BD conectada')
    })
    .catch(err => {
        console.log('Error ===========>', err)
    })
