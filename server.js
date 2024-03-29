const express = require('express');
const http = require ('http');
const socket = require ("socket.io")
const port = 2025
const app = express()
const server = http.createServer(app)
const io = socket(server)



app.set("view engine","ejs")

app.get ("/",(req,res)=>{
    res.render("homepage")
})

io.on("connection",(socket)=>{

    socket.on("message",(data)=>{
        socket.broadcast.emit("massage",data)
    })
    

})
server.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
