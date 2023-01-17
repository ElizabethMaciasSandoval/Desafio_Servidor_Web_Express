import express from "express";

const puerto = 8080;
const app = express();

app.listen(puerto, ()=>{
    console.log(`server listening port: ${puerto}`)
})