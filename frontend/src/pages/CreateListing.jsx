import {useState} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

function CreateListing(){

 const navigate = useNavigate()

 const [form,setForm] = useState({
  title:"",
  location:"",
  image:"",
  description:"",
  price:""
 })

 const submit = async()=>{

 const token = localStorage.getItem("token")

 await axios.post(
  "http://localhost:5000/api/listings",
  form,
  {headers:{Authorization:`Bearer ${token}`}}
 )

 navigate("/feed")

 }

 return(

 <div>

 <input placeholder="Title"
 onChange={(e)=>setForm({...form,title:e.target.value})}/>

 <input placeholder="Location"
 onChange={(e)=>setForm({...form,location:e.target.value})}/>

 <input placeholder="Image URL"
 onChange={(e)=>setForm({...form,image:e.target.value})}/>

 <textarea placeholder="Description"
 onChange={(e)=>setForm({...form,description:e.target.value})}/>

 <input placeholder="Price"
 onChange={(e)=>setForm({...form,price:e.target.value})}/>

 <button onClick={submit}>
 Create Listing
 </button>

 </div>

 )

}

export default CreateListing