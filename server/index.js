const express= require("express")
const cors= require("cors")
const mongoose = require("mongoose")
const UserModel = require("./model")

const app= express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://ytejusc:Welcome@cluster0.td2aeit.mongodb.net/cc")

app.get("/",(req,res)=>{
    res.send("i am charan")
})

app.get('/get',(req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.listen(3008,()=>{
    console.log("the server is running")
})