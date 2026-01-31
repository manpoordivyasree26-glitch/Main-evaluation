import supabase from "../config/supabase.js";

exports.createTrip=(req,res)=>{
const{customer_id,vehicle_id,distance_km,passengers}=req.body;

const vehicleQuery="SELECT * FROM vehicles WHERE Id=? isAvaliable=true";

db.query(vehicleQuery,[vehicle_id],(err,result)=>{
    if(!result.length)
        return res.status(400).json({message:"Vehicle not avaliable"})
    if(passengers>result[0].allowed_passenegers){
        return res.status(400).json({message:"Passenger Limit exceeded"});
    };

    const tripCost=distance_km* result[0].rate_per_km;

    db.query(tripsql,[customer_id,vehicle_id,distance_km,passengers,tripCost]);
    db.query("update vehicle set isAvalible,[vehicle_id]")
    res.json({message:"Trip created"});
})
}
exports.endTrip=(req,res)=>{
const{tripId}=req.params;

const sql="upadate trips set isCompleted=true where id=?"
db.query(sql,[tripId]);
res.json({message:"Trip ended"});
};