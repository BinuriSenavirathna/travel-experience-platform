import { useEffect, useState } from "react";
import axios from "axios";
import ListingCard from "../components/ListingCard";

function Feed(){

  const [listings,setListings] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:5000/api/listings")
    .then(res=>{
      setListings(res.data);
    });

  },[]);

  return(

    <div>

      <h2>Travel Experiences</h2>

      {listings.map((listing)=>(
        <ListingCard
          key={listing._id}
          listing={listing}
        />
      ))}

    </div>
  );
}

export default Feed;