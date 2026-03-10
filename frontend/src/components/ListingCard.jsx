import { Link } from "react-router-dom";

// helper function outside component
function timeAgo(date) {

  const now = new Date().getTime();
  const created = new Date(date).getTime();

  const diff = now - created;

  const hours = Math.floor(diff / (1000 * 60 * 60));

  if (hours < 1) return "Posted just now";

  return `Posted ${hours} hours ago`;
}

function ListingCard({ listing }) {

  return (

    <div style={{border:"1px solid gray",margin:"10px",padding:"10px"}}>

      <img
        src={listing.image}
        width="200"
      />

      <h3>{listing.title}</h3>

      <p>{listing.location}</p>

      <p>{listing.description}</p>

      <p>By {listing.user?.name}</p>

      <p>{timeAgo(listing.createdAt)}</p>

      <Link to={`/listing/${listing._id}`}>
        View Details
      </Link>

    </div>

  );
}

export default ListingCard;