import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async(e)=>{

    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {email,password}
    );

    localStorage.setItem("token",res.data.token);

    navigate("/");
  };

  return(

    <form onSubmit={handleLogin}>

      <h2>Login</h2>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <br/>

      <input
      type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/>

      <button type="submit">
        Login
      </button>

    </form>
  );
}

export default Login;