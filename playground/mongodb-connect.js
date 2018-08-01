//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to MongoDBServer')
 }
console.log('connected to MongoDB Server'); 

// const db=client.db('TodoApp');
// db.collection('TOdos').insertOne({
//   test:'Did Somthing',
//   completed:true

// },(err,result)=>{
// if(err){
//     return console.log('Unable to insert to ToDo',err)
// } 
// console.log(JSON.stringify(result.ops,undefined,2))
// })
 // client.close();
//  const db=client.db('TodoApp');
// db.collection('Users').find({"_id":new ObjectID('5b6009ffc023ddec666a7ebd')}).toArray().then((doc)=>{
// console.log("Todo's");
// console.log(JSON.stringify(doc,null,2))

// },(err)=>{

//     console.lof("Unable to fetch TodoApp ",err);
// });
//  db.collection('Users').insertOne({
   
// Users_Name:'ji',
//   Age:34,
//   Gender:'Male'
//  },(err,result)=>{
//  if(err){
//       return console.log('Unable to insert to Users',err)
//   } 
//  console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
//  });
 //client.close();

const db=client.db('TodoApp');
db.collection('Users').find({"Users_Name" : "Anurag Maji"}).toArray().then((doc)=>{
console.log(`Todo's Count ${JSON.stringify(doc,null,2)} `);
},(err)=>{

    console.lof("Unable to fetch TodoApp ",err);
});



 });