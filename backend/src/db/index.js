const mongoose = require("mongoose");

const ConnectToDb = async () => {
    await mongoose.connect("mongodb+srv://ak0638010:templerahu@cluster0.jlbr3h9.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

}

module.exports = {ConnectToDb};