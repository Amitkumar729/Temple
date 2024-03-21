const express = require("express");
const cors = require("cors");
const {config} = require("dotenv");
const { default: mongoose } = require("mongoose");
const {ConnectToDb} = require( "./db/index");
const  route  = require("./routes");
const bodyParser = require("body-parser");

config();

const app = express();

app.use(cors({origin: "*", credentials:  true}));

app.use(express.json()); 

// app.use(bodyParser.json());


app.use("/api", route );


ConnectToDb();

app.listen(4000, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})



 