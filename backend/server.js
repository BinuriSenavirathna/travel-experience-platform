import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"

import authRoutes from "./routes/authRoutes.js"
import listingRoutes from "./routes/listingRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))

app.use("/api/auth",authRoutes)
app.use("/api/listings",listingRoutes)

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})