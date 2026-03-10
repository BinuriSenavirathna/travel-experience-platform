import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Feed from "./pages/Feed"
import CreateListing from "./pages/CreateListing"
import ListingDetail from "./pages/ListingDetail"
import Navbar from "./components/Navbar"

function Layout(){

 const location = useLocation()

 const hideNavbar = ["/","/login","/register"]

 const showNavbar = !hideNavbar.includes(location.pathname)

 return(
 <>
 {showNavbar && <Navbar/>}

 <Routes>

 <Route path="/" element={<Landing/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/register" element={<Register/>}/>
 <Route path="/feed" element={<Feed/>}/>
 <Route path="/create" element={<CreateListing/>}/>
 <Route path="/listing/:id" element={<ListingDetail/>}/>

 </Routes>
 </>
 )
}

function App(){
 return(
 <BrowserRouter>
 <Layout/>
 </BrowserRouter>
 )
}

export default App