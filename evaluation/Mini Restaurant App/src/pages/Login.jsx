import {useState} from "react";
import {useNavigate} from "react-router-dom"

function Login(){
    const[email,setEmail]=useState("");
    const[password,setpassword]=useState("");
    const navigate=useNavigate();

    const handleLogin=()=>{
        if(email==="admin@gmail.com" && password==="admin1234")
        {
            localStorage.setItem("role","admin")
        navigate("/admin/dashboard");
    }
        else if(email==="customer@gmail.com" && password==="customer1234")
        {
            localStorage.setItem("role","customer");
            navigate("/customer/dashboard")
        }else{
            alert("Wrong email or password");
        }
    };
    

    return(
        <div>
            <h2>Login</h2>
            <input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}></input>
            <input
            type="password"
            placholder="password"
            onChange={(e)=>setpassword(e.target.value)}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
        
    )
}
export default Login;