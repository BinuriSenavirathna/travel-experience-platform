import { Link, useNavigate } from "react-router-dom"

function Navbar(){

 const navigate = useNavigate()

 const logout = () => {
   localStorage.removeItem("token")
   navigate("/login")
 }

 return(

 <div style={{display:"flex",gap:"20px"}}>

   <button onClick={()=>navigate("/feed")}>
     Home
   </button>

   <button onClick={()=>navigate("/feed")}>
     Public Feed
   </button>

   <button onClick={()=>navigate("/create")}>
     Create Travel Experience
   </button>

   <button onClick={logout}>
     Logout
   </button>

 </div>

 )
}

export default Navbar