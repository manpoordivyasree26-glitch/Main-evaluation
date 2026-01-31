import supabase from "../config/supabase.js";
export const signup=async(req,res)=>{
    const{name,email,password,role}=req.body;

    if(!["customer","owner","driver"].inculdes(role)){
        return res.status(400).json({message:"Invalid role"});
    }


        const {error}=await supabase
        .from("users")
        .insert([{
            name,
            email,
            password,
            role
        }]);
        if(error){
            return res.status(400).json({message:error.message});
        }
        res.json({message:"user created successfully"})
    
};