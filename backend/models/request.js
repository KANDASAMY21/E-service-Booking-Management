const mongoose=require('mongoose')

const requestSchema=new mongoose.Schema({
    customer_name:{
        type:String,
        require:true,
    },
    customer_phone:{
        type:Number,
        require:true,
    },
    mail:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        require:true,
    },
    session:{
        type:String,
        require:true,
    },
    service:{
        type:String,
        require:true,
    },
    service_man:{
        type:String,
        require:true,
    },
    service_phone:{
        type:Number,
        require:true
    }
})

const Request=mongoose.model('requests',requestSchema)

module.exports=Request