const express = require("express");
const { connectDatabase } = require("./database/database");
const app = express();

// tell node use dotenv file
require('dotenv').config()


// connect database AND providing the uri as a parameter
connectDatabase(process.env.MONGO_URI);

//test api to check the server is working or not
app.get("/", (req, res)=>{
    res.status(200).json({
        message: "I am Live",
    })
})

const PORT = process.env.PORT;
//listen server
app.listen(PORT, ()=>{
    console.log(`Server has started at ${PORT}.`)
})