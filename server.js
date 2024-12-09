const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}`);
});

app.use(express.json());
app.use(cors());

const Currency = require("./models/currency.js");

app.post("/currencies", async (req, res) => {
  const createdCurrency = await Currency.create(req.body);
});

app.listen(3001, () => {
  console.log("Listening on Port 3001");
});

// const currencySchema = mongoose.Schema({
//     name: String,
//     countryOfOrigin: String,
//     isoCode: String,
//     denominations: Number,
// })
