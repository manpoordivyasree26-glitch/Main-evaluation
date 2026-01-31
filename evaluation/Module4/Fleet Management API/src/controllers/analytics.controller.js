import supabase from "../config/supabase.js";

export const getAnalytics=async(req,res)=>{
    try{
        const{count:totalCustomers,error:cError}=await supabase
        .from("users")
        .select("*")
        .eq("role",customer);

        const{count:totalOwners,error:oError}=await supabase
        .from("users")
        .select("*")
        .eq("role","driver");
    
    const {count:totalDrivers,error:dError}=await supabase
    .from("vehicles")
    .select("*",{count:"exact",head:true})
    .eq("role","driver");

    const{count:totalVehicles,error:vError}=await supabase
    .from("users")
    .select("*");
    const{count:totalTrips,error:tError}=await supabase
    .from("trips")
    .select("*");

    if(cError||cError||dError||vError||tError)
    {
        return res.status(400).json({message:"Analtyics fetching failed"})
    }
    res.status(200).json({
        totalCustomers,
        totalOwners,
        totalDrivers,
        totalVehicles,
        totalTrips
    })
    }catch(error){
        res.status(500).json({message:"server error",error:error.message})
    }
};