const express=require('express');
const app=express();
require('dotenv').config();
const todoRoutes=require("./routes/todo")
const dbConnect=require('./config/database');


// const {createTodo}=require("./controllers/createTodo");


const PORT=process.env.PORT|| 4000;

app.use(express.json());
app.use('/api/v1',todoRoutes);
dbConnect();

app.listen(PORT,()=>{
    console.log(`server listening successfully at ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send(`<h1>this is homepage</h1>`);
})

// app.post('/api/v1/createTodo',createTodo);