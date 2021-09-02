const express=require("express");

const app=new express();
require("./db/conn");
const port = process.env.port || 3000;

const OLYMPICSMODEL=require("./models/olympic");
app.use(express.json());
const router=require("./routers/routing");
app.use(router);


app.listen(port,()=>{
    console.log("Connection Successful");
})