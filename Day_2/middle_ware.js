const express = require ("express");
const app = express()
app.get ('/',(req,res,next)=>{
    console.log("in first")
    next()

}
,(req,res)=>{
    res.status(200)
    res.json(req.query)
});
app.post('/',(req,res)=>{
    res.json({text:req.body})
})
app.listen(5000)
