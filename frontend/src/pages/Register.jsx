import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register(){

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const submit = async(e)=>{

e.preventDefault();

await axios.post(
"http://localhost:5000/api/auth/register",
{name,email,password}
);

navigate("/login");

};

return(

<div className="auth">

<form onSubmit={submit}>

<h2>Create Account</h2>

<input placeholder="Name"
onChange={(e)=>setName(e.target.value)}/>

<input placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}/>

<input type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}/>

<button>Register</button>

</form>

</div>

);

}

export default Register;