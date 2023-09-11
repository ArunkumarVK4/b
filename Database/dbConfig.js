const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_URI
const connectDB = async() =>{
    try {
        mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(con=>{
            console.log(`mongoDB is connected to the host ${con.connection.host}`);
        })
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

module.exports = connectDB;