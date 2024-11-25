const mongoose=require('mongoose')

const workerSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    job:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    experience:{
        type:String,
    },
    rating:{
        type:Number,
    },
    age:{
        type:Number,
    },
    loc:{
        type:String,
    }
})

const Work=mongoose.model('workers',workerSchema)

module.exports=Work