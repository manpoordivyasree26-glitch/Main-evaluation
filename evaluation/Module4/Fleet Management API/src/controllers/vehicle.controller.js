import supabase from "../config/supabase.js";

export const addVehicle=async(req,res)=>{
    const{
        owner_id,
        name,
        registration_number,
        allowed_passengers,
        rate_per_km
     }=req.body;

     const{error}=await supabase
     .from("vehicles")
     .insert([{
        owner_id,
        name,
        registration_number,
        allowed_passengers,
        rate_per_km
     }
    ]);
    if(error)
        return res.status(400).json({message:error.message})
         res.json({message:"Vehicle  added successfully"})        
     }

export const assignDriver=async(req,res)=>{
    const{vehicleId}=req.params;
    const{driver_id}=req.body;

    await supabase
    .from("vehicles")
    .update({driver_id})
    .eq("id",vehicleId);

    res.json({message:"Driver assigned"})
}