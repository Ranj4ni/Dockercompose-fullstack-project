const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("<h1>DevOps Full Stack Project Running 🚀</h1>")
})

app.listen(3000, ()=>{
    console.log("Frontend running on port 3000")
})
