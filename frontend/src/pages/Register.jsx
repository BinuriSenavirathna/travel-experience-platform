import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/auth/register",
      {name,email,password}
    );

    alert("User registered successfully");

    navigate("/login");
  };

  return (

    <form onSubmit={handleSubmit}>

      <h2>Register</h2>

      <input placeholder="Name"
      onChange={(e)=>setName(e.target.value)} />

      <br/>

      <input placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)} />

      <br/>

      <input type="password"
      placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)} />

      <br/>

      <button type="submit">
        Register
      </button>

    </form>
  );
}

export default Register;