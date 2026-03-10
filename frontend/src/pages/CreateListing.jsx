import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateListing(){

  const [title,setTitle] = useState("");
  const [location,setLocation] = useState("");
  const [image,setImage] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{

    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/listings",
      {title,location,image,description,price}
    );

    navigate("/");
  };

  return(

    <form onSubmit={handleSubmit}>

      <h2>Create Listing</h2>

      <input placeholder="Title"
      onChange={(e)=>setTitle(e.target.value)} />

      <br/>

      <input placeholder="Location"
      onChange={(e)=>setLocation(e.target.value)} />

      <br/>

      <input placeholder="Image URL"
      onChange={(e)=>setImage(e.target.value)} />

      <br/>

      <textarea placeholder="Description"
      onChange={(e)=>setDescription(e.target.value)} />

      <br/>

      <input placeholder="Price"
      onChange={(e)=>setPrice(e.target.value)} />

      <br/>

      <button type="submit">
        Create Listing
      </button>

    </form>
  );
}

export default CreateListing;