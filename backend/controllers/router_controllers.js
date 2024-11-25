const user=require('../models/users')
const work=require("../models/workers")
const Req=require("../models/request")
const Feed=require("../models/feed")

const new_user=async (req,res)=>{
    const username=req.body.name;
    const pass=req.body.password;
    const retyped=req.body.retyped;
    try{
     let exist= await user.findOne({name:username});
      if(exist){
        console.log("Username already exist!!!");
        res.status(401).json({message:"User already exist!!!"});
      }else{
        if(pass==retyped){
            await user.create(req.body)
            res.status(201).json({message:"Registered successfully!!!"})
        }else{
            console.log("Password doesn't match retype the correct password!!!")
            res.status(401).json({message:"Password missmatch!!!"})
        }
        
      }
    }catch(err){
       return res.status(500).json({message:"Server side error"})
    }
    
}

const login=async (req,res)=>{
    const username=req.body.name;
    const password=req.body.password;
    try{
       let exist=await user.findOne({name:username});
       if(!exist){
         console("No user found by that name!!!")
         res.status(404).json({message:"User name doesn't exist!!!"})
       }else{
         if(password==exist.password){
            console.log(`Welcome master ${username}`);
            res.status(201).json({message:"Loged in successfully!!!"})
         }else{
            console.log("You have entered wrong password!!!")
            res.status(401).json({message:"Wrong password"})
         }
       }
    }catch(err){
         res.status(500).json({message:"Server error!!!"})
    }
}

const fetch=async (req,res)=>{
   const job_title=req.params.job;
   try{
     const data=await work.find({job:job_title})
     console.log(data);
     res.status(201).json({work_data:data})
   }catch(err){
     console.log(err);
     res.status(500).json({message:"Server error!!!"})
   }
}

const request_service=async (req,res)=>{
   const data=req.body;
   console.log(data);
    try{
      const requested=await Req.create(data);
      console.log(requested);

      res.status(201).json({message:"Request send successfully!!!"})
    }catch(err){
       console.log(err)
       res.status(500).json({message:"Server error"})
    }
}

const feedback=async (req,res)=>{
   const data=req.body
   try{
    const feeding=await Feed.create(data)
    console.log(feeding)

    res.status(201).json({message:"Feedback noted!!!"})
   }catch(err){
     res.status(500).json({message:"Server error !!!"})
   }
}





module.exports={
    new_user,
    login,
    fetch,
    request_service,
    feedback
}