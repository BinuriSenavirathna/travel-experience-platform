import { Link } from "react-router-dom"

function ListingCard({listing}) {

  return (

    <div style={{
      border:"1px solid #ccc",
      margin:"20px",
      padding:"10px",
      width:"300px"
    }}>

      <img
        src={listing.image}
        alt="travel"
        style={{width:"100%"}}
      />

      <h3>{listing.title}</h3>

      <p>{listing.location}</p>

      <p>{listing.description}</p>

      <p>By {listing.user?.name}</p>

      <Link to={`/listing/${listing._id}`}>
        View Details
      </Link>

    </div>
  )
}

export default ListingCard