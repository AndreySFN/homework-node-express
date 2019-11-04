const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser,(req,res)=>{
    const regInformation = req.body;
    console.log('Попытка регистрации');
    console.log(regInformation)
    fs.appendFile('./users.txt',`{
    login:"${regInformation.login}",
    email:"${regInformation.email}",
    password:"${regInformation.password}",
    registrationDate:"${new Date()}",
},\n`,(err)=>{
    if(err){
        res.send('ERROR!')
        throw err
    }
    res.render('SignUp', {
        title:'You sign up now!',
        login: regInformation.login,
        password:regInformation.password,
        email:regInformation.email,
    });
})   
})
    

module.exports = router;