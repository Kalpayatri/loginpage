const mongoose= require('mongoose')

const Schema= mongoose.Schema
const loginSchema= new Schema({
    username:{
        type:String,
        required:[true,'user should have a name']
    },
    email:{
        type: String,
        required:true,
        },
    password:{
        type:String,
        required:[true,'email is required'],   
    }
})

const Login=mongoose.model('Login', loginSchema)

module.exports= Login

