// app.js
// This file sets up an Express server, connects to a MongoDB database,
// and defines routes for the application.
// It includes a sample route to save a listing to the database.

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "A beautiful villa with a sea view.",
//     price: 250,
//     location: "Malibu, California",
//     imageUrl: "https://example.com/villa.jpg",
//     country: "USA",
//   });

//   await sampleListing.save();
//   console.log("Sample listing saved:");
//   res.send("successfully saved sample listing");
// });

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
