import {useNavigate} from "react-router-dom"
import background from "../images/back.jpeg"

function Landing(){

 const navigate = useNavigate()

 return(

 <div
 style={{
  height:"100vh",
  backgroundImage:`url(${background})`,
  backgroundSize:"cover",
  backgroundPosition:"center",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  flexDirection:"column"
 }}
 >

 <h1 style={{color:"white"}}>Welcome to Travel Hub</h1>

 <div>

 <button onClick={()=>navigate("/login")}>
 Login
 </button>

 <button onClick={()=>navigate("/register")}>
 SignUp
 </button>

 </div>

 </div>

 )
}

export default Landing