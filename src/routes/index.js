const express = require("express");
const { donationData, getDonationData } = require("../controller");
 



const route = express.Router();

route.post("/donations", donationData );
route.get("/getDonationData", getDonationData);
 

module.exports = route;