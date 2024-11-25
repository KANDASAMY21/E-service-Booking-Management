const express=require('express');
const bodyparser=require('body-parser');
const port=4040;
const cors=require('cors');
const main=require('./Routes/routes')
const mongoose=require('mongoose');

const app=express()

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/e_service')

app.use("/e_service",main);

app.listen(port,()=>{
    console.log(`Port is running on ${port}`)
})

