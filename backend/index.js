require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT=6005;
require("./db/conn");

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.status(200).json("server start")
});

app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`);
})