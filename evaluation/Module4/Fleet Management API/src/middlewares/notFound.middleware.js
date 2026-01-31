import {notFound} from "express-rate-limit";
const notFound=(req,res)=>{
    res.status(404).json({message:"This Request is Not Found"});

};
module.exports=notFound;