import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CreateListing(){

  const [title,setTitle] = useState("")
  const [location,setLocation] = useState("")
  const [image,setImage] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")

  const navigate = useNavigate()

  const handleCreate = async()=>{

    await axios.post(
      "http://localhost:5000/api/listings",
      {title,location,image,description,price}
    )

    navigate("/")
  }

  return(

    <div style={{padding:"40px"}}>

      <h2>Create Listing</h2>

      <input placeholder="Title"
      onChange={(e)=>setTitle(e.target.value)}
      />

      <br/><br/>

      <input placeholder="Location"
      onChange={(e)=>setLocation(e.target.value)}
      />

      <br/><br/>

      <input placeholder="Image URL"
      onChange={(e)=>setImage(e.target.value)}
      />

      <br/><br/>

      <textarea placeholder="Description"
      onChange={(e)=>setDescription(e.target.value)}
      />

      <br/><br/>

      <input placeholder="Price"
      onChange={(e)=>setPrice(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleCreate}>
        Create Listing
      </button>

    </div>

  )
}

export default CreateListing