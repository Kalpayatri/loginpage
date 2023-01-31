const mongoose=require('mongoose')
mongoose.set('strictQuery', true);

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/jan2023')
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log('not connected to db')
    })
}

module.exports=configureDB