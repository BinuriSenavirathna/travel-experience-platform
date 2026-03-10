import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",background:"#333",color:"white"}}>

      <h2>Travel Platform</h2>

      <div>
        <Link to="/" style={{color:"white",marginRight:"10px"}}>Feed</Link>
        <Link to="/create" style={{color:"white",marginRight:"10px"}}>Create</Link>
        <Link to="/login" style={{color:"white",marginRight:"10px"}}>Login</Link>
        <Link to="/register" style={{color:"white",marginRight:"10px"}}>Register</Link>

        <button onClick={logout}>Logout</button>
      </div>

    </div>
  );
}

export default Navbar;