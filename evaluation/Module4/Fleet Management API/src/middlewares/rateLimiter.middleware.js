
import {rateLimit} from "express-rate-limit"


const vehicleLimiter=rateLimit({
    windowMs:60*1000,
    max:5,
    message:"to Many requests,try later"
})
module.exports=vehicleLimiter