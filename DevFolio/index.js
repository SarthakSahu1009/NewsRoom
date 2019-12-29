var express = require('express');

var app = express();

app.get('/',function(req,res)
{
    res.sendfile('./login.html');

})
app.get('/welcome',function(req,res)
{
    res.sendfile('./welcome.html');
})

app.listen(3001,()=>
   {
       console.log("server is working");
   })