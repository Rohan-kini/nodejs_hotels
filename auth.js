const passport=require('passport');
const local_strategy=require('passport-local').Strategy;
const Person=require('./models/person');

passport.use(new local_strategy(async(USERNAME,password,done)=>{

    try{
      //console.log("Received credentials:",USERNAME,password);
      const user= await Person.findOne({username:USERNAME});
      if(!user){
        return done(null,false,{message:'INCORRECT USERNAME'});
      }
  
      const ispassword=await user.comparePassword(password);
      if(ispassword){
        return done(null,user);
      }else{
        return done(null,false,{message:'INCORRECT PASSWORD'});
      }
  
    }catch(err){
        return done(err);
    }
  }));

  module.exports=passport;