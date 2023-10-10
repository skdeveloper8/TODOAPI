const mongoose=require('mongoose');

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("DB connected");
    })
    .catch((err)=>{
        console.log("Issue in db connection");
        console.log(err);
        process.exit(1);
    })
}

module.exports =dbConnect;