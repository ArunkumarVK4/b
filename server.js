const express = require("express")
require("dotenv").config()
const cors = require("cors")
const app = express()
const connectDB = require("./Database/dbConfig")
const router = require("./routes/bookRoutes") 
const cookieParser = require("cookie-parser");


  
//Body parser
app.use(express.json())

app.use(cookieParser());


//Cross Origin 
app.use(cors())

//Database Connection
connectDB()

app.get("/", ( req, res)=>{
    res.send("successfully deployed")
})

app.use("/books", router)

app.listen(process.env.PORT, ()=>{
    console.log(`server listening to the port: ${process.env.PORT}`)
})