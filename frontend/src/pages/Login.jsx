import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Login(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()

  const handleLogin = async()=>{

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {email,password}
    )

    localStorage.setItem("token",res.data.token)

    navigate("/")
  }

  return(

    <div style={{padding:"40px"}}>

      <h2>Login</h2>

      <input
      placeholder="Email"
      onChange={(e)=>setEmail(e.target.value)}
      />

      <br/><br/>

      <input
      placeholder="Password"
      type="password"
      onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  )
}

export default Login