import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Feed from "./pages/Feed"
import CreateListing from "./pages/CreateListing"
import ListingDetail from "./pages/ListingDetail"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Feed />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/create" element={<CreateListing />} />

        <Route path="/listing/:id" element={<ListingDetail />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App