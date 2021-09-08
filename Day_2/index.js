const express= require("express")
const app=express()
app.get('/',(req,res)=>{
    // res.send("Hello ")
    // res.send()
    // res.status(200).send("hello")
})
app.get('/Product',(req,res)=>{
    
    res.status(200).send("Ishu")
})

app.listen(5000);