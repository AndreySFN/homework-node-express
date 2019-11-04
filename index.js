const express = require('express');
const handlebars = require('express-handlebars');
const aboutRouter = require('./routers/about')
const signUpRouter = require('./routers/signUp')
const signInRouter = require('./routers/signIn')
const testRouter = require('./routers/test')
const fs = require('fs')
const logger = require('morgan');

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('views', './templates');
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(logger('dev'))
app.use('/about',aboutRouter);
app.use('/test',testRouter)
app.use('/SignUp', signUpRouter)
app.use('/SignIn', signInRouter)
app.get('/users',(res,req)=>{
    fs.readFile('./users.txt',(err,data)=>{
        req.send(`{[
    ${data}
]}`)
    })

})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
  });