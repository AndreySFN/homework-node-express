const express = require('express');
const router = express.Router();
const fs = require('fs')

router.get('/',(req, res)=>{
    fs.readFile('./about.html',(err,data)=>{
        res.render('about',{title:"About us", content:data})
    })
})

module.exports=router