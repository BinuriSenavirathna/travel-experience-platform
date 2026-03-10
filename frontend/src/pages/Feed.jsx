import {useEffect,useState} from "react"
import axios from "axios"
import ListingCard from "../components/ListingCard"

function Feed(){

 const [listings,setListings] = useState([])

 useEffect(()=>{

 axios.get("http://localhost:5000/api/listings")
 .then(res=>setListings(res.data))

 },[])

 return(

 <div>

 {listings.map(l=>(
  <ListingCard key={l._id} listing={l}/>
 ))}

 </div>

 )

}

export default Feed