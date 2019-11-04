const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.post('/', urlencodedParser,(req,res)=>{
    const loginInformation = req.body;
    console.log('Попытка входа');
    console.log(loginInformation)
    //Забросы к БД
    res.send(`<h3>Пока недоделяль:(</h3>
        <h3><a href='/'>Назад</a></h3>
 <img src="https://www.maxizoo.it/blog/wp-content/uploads/2017/08/1453281281_5.jpg" style="width:500px; height:500px;"></img>`);
})

module.exports = router;