import { Link } from "react-router-dom"

function Navbar() {

  return (
    <div style={{
      display:"flex",
      justifyContent:"space-between",
      padding:"15px",
      background:"#222",
      color:"white"
    }}>

      <h2>Travel Experiences</h2>

      <div>

        <Link to="/" style={{marginRight:"10px",color:"white"}}>Feed</Link>

        <Link to="/create" style={{marginRight:"10px",color:"white"}}>Create</Link>

        <Link to="/login" style={{marginRight:"10px",color:"white"}}>Login</Link>

        <Link to="/register" style={{color:"white"}}>Register</Link>

      </div>

    </div>
  )
}

export default Navbar