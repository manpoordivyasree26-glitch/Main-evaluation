import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddRestaurant(){
const[form,setForm]=useState({
    restaurantID:Date.now(),
    name:"",
    address:"",
    type:"",
    parking:"",
    image:"",

});
const navigate=useNavigate();

const handleAdd=()=>{
    const data=JSON.parse(localStorage.getItem("restaurants"))||[];
    data.push(form);
    localStorage.setItem("resturants",JSON.stringify(data));
    alert("Restaurants added");
    navigate("/admin/dashboard")
};

return(
    <div>
        <h2>Add Resturants</h2>
        <input placholder="Name" onChange={(e)=>setForm({...form,name:e.target.value})}></input>
        <input placholder="Address" onChange={(e)=>setForm({...form,address:e.target.value})}></input>
        <select onChange={(e)=>setForm({...form, type:e.target.value})}>
            <option value="">Select Type</option>
            <option>Rajasthan</option>
            <option>Gujarath</option>
            <option>Mughlai</option>
            <option>Jain</option>
          </select>
          <label>
            parking
            <input type="checkbox" onChange={(e)=>setForm({...form,parking:e.target.checked})}></input>
          </label>
          <input placeholder="Image URl" onChange={(e)=>setForm({...form,image:e.target.value})}>
          </input>
          <button onClick={handleAdd}>Add</button>
          </div>
);
}
export default AddRestaurant;