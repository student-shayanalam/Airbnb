const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, required: true },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1598300053656-dafc64af98dd",
      set: (v) =>
        v === ""
          ? "https://images.unsplash.com/photo-1598300053656-dafc64af98dd"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
