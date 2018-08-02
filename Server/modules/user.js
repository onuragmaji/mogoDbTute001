var mongoose=require('mongoose');

var user=mongoose.model('user',{
  email:{
      type:String,
      required:true,
      trim:true,
      minlength:1
  }

});

module.exports={user};
//user.save().then((doc)=>{console.log("Saved ",doc)},(err)=>{console.log("Unable to save ",err)});