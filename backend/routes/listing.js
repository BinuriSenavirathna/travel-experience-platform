const router = require("express").Router()
const Listing = require("../models/Listing")

router.post("/",async(req,res)=>{

 const listing = new Listing(req.body)
 await listing.save()

 res.json(listing)

})

router.get("/",async(req,res)=>{

 const listings = await Listing
 .find()
 .populate("user","name")
 .sort({createdAt:-1})

 res.json(listings)

})

router.get("/:id",async(req,res)=>{

 const listing = await Listing
 .findById(req.params.id)
 .populate("user","name")

 res.json(listing)

})

module.exports = router