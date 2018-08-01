const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDBServer')
 }
console.log('connected to MongoDB Server'); 

const db=client.db('TodoApp');
// db.collection('TOdos').deleteMany({test:'Eat Lunch?'}).then((result)=>{
// console.log(result);

// });
// db.collection('TOdos').deleteOne({test:'Eat Lunch?'}).then((result)=>{
// console.log(result);

// });

db.collection('TOdos').findOneAndDelete({test:'Somthing to do'}).then((result)=>{
 console.log(result);

 },(err)=>{console.log("Error ",err);});

 });
