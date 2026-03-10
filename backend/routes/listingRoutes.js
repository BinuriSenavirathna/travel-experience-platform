import express from "express"
import Listing from "../models/Listing.js"
import {authMiddleware} from "../middleware/authMiddleware.js"

const router = express.Router()

router.post("/",authMiddleware,async(req,res)=>{

 const listing = await Listing.create({

  title:req.body.title,
  location:req.body.location,
  image:req.body.image,
  description:req.body.description,
  price:req.body.price,
  creator:req.user.id

 })

 res.json(listing)
})

router.get("/",async(req,res)=>{

 const listings = await Listing.find()
 .populate("creator","name")
 .sort({createdAt:-1})

 res.json(listings)
})

router.get("/:id",async(req,res)=>{

 const listing = await Listing.findById(req.params.id)
 .populate("creator","name")

 res.json(listing)
})

export default router