const express = require('express');

const app = express();

app.use('/users',(req, res, next)=>{
    console.log('/users');
    res.send('<p>MiddleWare that handles "/users"</p>')
});
app.use('/',(req, res, next)=>{
    console.log('/MiddleWare');
    res.send('<p>MiddleWare that handles "/"</p>')
    next();
});

app.listen(3000);