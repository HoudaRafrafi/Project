const mongoose= require('mongoose')
const userSchema = new mongoose.Schema({
    
    email:
    {
        type: String,
        required : true
    },
    password:
    {
        type: String,
        required: true
    },
})

let user = mongoose.model('user',userSchema,'users')

module.exports = user 