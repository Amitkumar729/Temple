const express = require("express");
const donationData = require("../controller");
 



const route = express.Router();

route.post("/donations", donationData );
 

module.exports = route;