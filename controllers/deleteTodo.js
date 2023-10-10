const Todo=require('../models/todo');

exports.deleteTodo=async (req,res)=>{
    try{
        const {id}=req.params;
        const response=await Todo.findByIdAndDelete({_id:id});

        res.status(200).json({
            success:true,
            data:response,
            message:"deleted successfully"
        })

    }
    catch(err){
   console.log(err);
   res.status(500).json({
    success:false,
    error:err.message,
    message:"Internal error"
   })

    }
}