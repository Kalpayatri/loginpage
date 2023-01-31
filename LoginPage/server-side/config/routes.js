const express=require('express')
const router= express.Router()
const loginCtlr= require('../app/controllers/LoginCtlr')

router.get('/api//login',loginCtlr.list)
router.post('/api/login',loginCtlr.create)

module.exports=router