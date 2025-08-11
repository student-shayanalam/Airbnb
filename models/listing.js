const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/gray-fabric-loveseat-near-brown-wooden-table-3wylDrjxH-E",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/gray-fabric-loveseat-near-brown-wooden-table-3wylDrjxH-E"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
