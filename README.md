# Mini Travel Experience Listing Platform

## Project Overview
This project is a full-stack web application that allows experience providers to create and share travel experiences. Travelers can discover experiences through a public feed.

## Tech Stack
Frontend: React (Vite)  
Backend: Node.js + Express  
Database: MongoDB Atlas  
Authentication: JWT  
Deployment: Vercel + Render

## Features Implemented

- User Registration
- User Login
- User Logout
- Create Travel Experience Listings
- Public Feed of Listings
- Listing Detail Page
- Listings sorted by newest first

## Setup Instructions

### Backend

cd backend  
npm install  
node server.js  

### Frontend

cd frontend  
npm install  
npm run dev  

## Architecture & Key Decisions

I chose the MERN stack because it allows full-stack development using JavaScript across both frontend and backend. Authentication is implemented using JSON Web Tokens (JWT). After login, the server generates a token which is stored in localStorage on the client side. Travel listings are stored in MongoDB with a reference to the user who created them.

If I had more time, I would implement image uploads using a cloud storage service such as Cloudinary and add search and filtering functionality.

## Scaling Strategy

If the platform had 10,000 listings, I would implement pagination or infinite scrolling to avoid loading all listings at once. Database indexing on fields such as location and title would improve query performance. Search and filtering functionality would help users quickly find relevant experiences. API responses could be cached using Redis to reduce database load. Images could be served through a CDN for faster delivery and better performance.
