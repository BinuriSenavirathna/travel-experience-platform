import {useParams} from "react-router-dom"
import {useEffect,useState} from "react"
import axios from "axios"

function ListingDetail(){

 const {id} = useParams()

 const [listing,setListing] = useState(null)

 useEffect(()=>{

 axios.get(`http://localhost:5000/api/listings/${id}`)
 .then(res=>setListing(res.data))

 },[])

 if(!listing) return <p>Loading...</p>

 return(

 <div>

 <img src={listing.image} width="400"/>

 <h2>{listing.title}</h2>

 <p>{listing.location}</p>

 <p>{listing.description}</p>

 <p>Price: ${listing.price}</p>

 <p>Creator: {listing.creator.name}</p>

 </div>

 )
}

export default ListingDetail