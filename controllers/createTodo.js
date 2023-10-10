const Todo=require("../models/todo");

exports.createTodo=async (req,res)=>{

    try{
        //extract title and desc from body
        const {title,description}=req.body;

   const response=await Todo.create({title,description});

   console.log("Entery created successfully");
   res.status(200)
        .json({
            success:true,
            data:response,
            message:"entry created successfully"
        })


    }
    catch(err){
        console.log((err));
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })


    }
}