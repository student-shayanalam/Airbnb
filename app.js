const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/Listing");

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/testListing", (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "A beautiful villa with a sea view.",
    price: 250,
    location: "Malibu, California",
    imageUrl: "https://example.com/villa.jpg",
    country: "USA",
  });

  sampleListing.save();
  console.log("Sample listing saved:");
  res.send("successfully saved sample listing");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
