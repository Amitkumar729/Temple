const Donation = require("../model");

const donationData = async (req, res) => {
  try {
    const { name, location } = req.body;
    const donation = await Donation.create({ name, location });
    await donation.save();

    return res.status(201).json({
      message: "Data saved successfully!",
      donation,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error, Failed to save the data...",
    });
  }
};

module.exports = donationData;
