const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/formulaire', (err)=> {

    if (err)
    {
        console.log(err)
    } else
    {
        console.log('connected to data base succesfully...')
    }
})