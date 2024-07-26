const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
const port = 4568;
const mongoUrl = "mongodb+srv://praveen:praveen@cluster0.y6h6jpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl, {})
mongoose.connection.on('connected',()=>{
    console.log("mongoDb is connect successfully")
})

const eventRoute = require('./route/eventRoute')
const userRoute = require('./route/userRoute')
app.use('/prav', eventRoute)
app.use('/prav', userRoute)
app.listen(port,()=>{
    console.log("port connected successfully at" + port)
})