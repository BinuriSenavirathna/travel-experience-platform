import { Link } from "react-router-dom"

function ListingCard({ listing }) {

  return (

    <div>

      <img src={listing.image} width="200" />

      <h3>{listing.title}</h3>

      <p>{listing.location}</p>

      <p>{listing.description}</p>

      <p>
        By {listing.creator?.name || "Unknown"}
      </p>

      <Link to={`/listing/${listing._id}`}>
        View Details
      </Link>

    </div>

  )
}

export default ListingCard