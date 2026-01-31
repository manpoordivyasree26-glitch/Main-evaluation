import fs from "fs";
const logger=(req,res,next)=>{
    const log=`${req.method} ${req.url} ${new Date().toISOString()}\n`
    fs.appendFileSync("logs.txt",log);
    next();
}
module.exports=logger;