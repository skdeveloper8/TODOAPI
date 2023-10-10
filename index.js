// const express=require("express");
// const app=express();

// const bodyParser=require('body-parser');
// app.use(bodyParser.json());

// app.listen(3001,(req,res)=>{
//     console.log('port working at 3001');
// })

// app.get('/',(req,res)=>{
//     res.send("Hello jee");
// })

// app.post('/api/cars',(req,res)=>{
//         const {name,brand}= req.body;
//         console.log(name);
//         console.log(brand);
//         res.send("car sumitted successfully");
// })

// const mongoose=require("mongoose");
// mongoose.connect("mongodb+srv://sangeetkumar:ZPcRUiqRDQyenl5O@cluster0.jgiqvbs.mongodb.net/myDatabase",{
//     useNewurlParser:true,
//     useUnifiedTopology:true
// })
// .then(()=>{
//     console.log("connesction successfull");
// })
// .catch((err)=>{
//     console.log(err);
// })