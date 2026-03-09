const router = require("express").Router();
const Listing = require("../models/Listing");


// Create new listing
router.post("/", async (req, res) => {

  try {

    const listing = new Listing(req.body);

    await listing.save();

    res.json(listing);

  } catch (err) {

    res.status(500).json(err);

  }

});


// Get all listings
router.get("/", async (req, res) => {

  try {

    const listings = await Listing
      .find()
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json(listings);

  } catch (err) {

    res.status(500).json(err);

  }

});


// Get single listing
router.get("/:id", async (req, res) => {

  try {

    const listing = await Listing
      .findById(req.params.id)
      .populate("user", "name");

    res.json(listing);

  } catch (err) {

    res.status(500).json(err);

  }

});

module.exports = router;