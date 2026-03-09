const mongoose = require("mongoose")

const ListingSchema = new mongoose.Schema({

 title:String,
 location:String,
 image:String,
 description:String,
 price:Number,

 user:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"User"
 }

},{timestamps:true})

module.exports = mongoose.model("Listing",ListingSchema)