var express=require('express')
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./modules/Todo');
var {user}=require('./modules/user');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
   console.log(req.body);
   var todo=new Todo({
       text:req.body.text
   })
todo.save().then((doc)=>{
    res.status('200').send(doc) 
    console.log('Saved ',JSON.stringify(doc,null,2))},
(err)=>{
    console.log("Unable to Save ",err);
    res.status('400').send(err);
})
});

app.listen(3000,()=>{console.log("Started on PORT 3000")});