import { useEffect, useState } from "react"
import axios from "axios"
import ListingCard from "../components/ListingCard"

function Feed() {

  const [listings,setListings] = useState([])

  useEffect(()=>{

    axios.get("http://localhost:5000/api/listings")
    .then(res=>{
      setListings(res.data)
    })

  },[])

  return (

    <div>

      <h2 style={{textAlign:"center"}}>Travel Experience Feed</h2>

      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
      }}>

        {listings.map(listing=>(
          <ListingCard key={listing._id} listing={listing} />
        ))}

      </div>

    </div>
  )
}

export default Feed