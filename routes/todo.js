const  express=require('express')
const  router=express.Router();

const {createTodo}=require("../controllers/createTodo")
const {getTodo}=require("../controllers/getTodo")
const {deleteTodo}=require("../controllers/deleteTodo")


router.post("/createTodo",createTodo);//api routes

router.get("/getTodos",getTodo);

router.delete("/deleteTodo/:id",deleteTodo);



module.exports =router;