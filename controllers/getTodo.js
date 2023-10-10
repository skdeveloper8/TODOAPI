const Todo=require('../models/todo');



exports.getTodo=async (req,res)=>{
    try{
        //extract all data from database
    const todos=  await Todo.find({});

    res.status(200)
    .json({
        success:true,
        data:todos,
        message:"Entire data is extrected"
    })


    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error"
        })

    }
}