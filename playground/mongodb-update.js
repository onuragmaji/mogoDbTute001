const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDBServer')
 }
console.log('connected to MongoDB Server'); 

const db=client.db('TodoApp');

db.collection('TOdos').findOneAndUpdate({_id:new ObjectID('5b6195580b101b65f8e50d70')},{
$set:{completed:"true"}},{returnOriginal:false}).then((result)=>{
 console.log(result);

 },(err)=>{console.log("Error ",err);});

 });
