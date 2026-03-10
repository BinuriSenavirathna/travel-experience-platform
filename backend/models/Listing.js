import mongoose from "mongoose"

const listingSchema = new mongoose.Schema({

 title:String,
 location:String,
 image:String,
 description:String,
 price:Number,

 creator:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
 }

},{timestamps:true})

export default mongoose.model("Listing",listingSchema)