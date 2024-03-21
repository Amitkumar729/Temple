const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");

const DonationSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  location: {
    type: String, 
    required: true,
  },
});

const Donation = mongoose.model("Donation", DonationSchema);

module.exports = Donation;
