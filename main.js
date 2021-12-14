const express=require('express')
const app=express()
const path=require("path")
const d = new Date();
    let day = d.getDay();
    let h = d.getHours();
    const logger=(req,res,next)=>{
        if(day<6 && day>0 && h>9 && h<17){next()}
        else{res.send("Please visit us again from monday to friday,from 9am to 5pm")}
    }
    app.use(logger)
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
app.use(express.static('public'))
app.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','services.html'))
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','contact.html'))
})



const PORT=process.env.PORT || 5000
app.listen(PORT,(err)=>err ? console.log(err):console.log(`server running on port ${PORT}...`))