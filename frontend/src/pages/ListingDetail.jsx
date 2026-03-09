import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function ListingDetail(){

  const {id} = useParams()

  const [listing,setListing] = useState(null)

  useEffect(()=>{

    axios.get(`http://localhost:5000/api/listings/${id}`)
    .then(res=>{
      setListing(res.data)
    })

  },[id])

  if(!listing) return <p>Loading...</p>

  return(

    <div style={{padding:"40px"}}>

      <h2>{listing.title}</h2>

      <img
      src={listing.image}
      style={{width:"400px"}}
      />

      <p><b>Location:</b> {listing.location}</p>

      <p>{listing.description}</p>

      <p><b>Price:</b> {listing.price}</p>

      <p><b>Creator:</b> {listing.user?.name}</p>

    </div>

  )
}

export default ListingDetail