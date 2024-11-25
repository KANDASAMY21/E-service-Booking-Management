const mongoose=require("mongoose")

const feddSchema=new mongoose.Schema({
    service_man:{
        type:String,
        require:true,
    },
    feedback:{
        type:String,
        require:true,
    }
})

const Feed=mongoose.model('feedback',feddSchema)

module.exports=Feed