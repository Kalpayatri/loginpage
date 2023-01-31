const Login=require('../models/LoginModel')

const loginCtlr={}


loginCtlr.list=(req,res)=>{
    Login.find()
    .then((login)=>{
        res.json(login)

    })
    .catch((err)=>{
        res.json(err)
    })

}


loginCtlr.create=(req,res)=>{
    const body= req.body
    const login= new Login(body)
    login.save()
    .then((login)=>{
        res.json(login)

    })
    .catch((err)=>{
        res.json(err)
    })

}
module.exports= Login