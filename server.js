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

app.get('/currencies', async (req,res) => {
    const foundCurrencies = await Currency.find()
    res.json(foundCurrencies)
})

app.post("/currencies", async (req, res) => {
  const createdCurrency = await Currency.create(req.body);
  res.json(createdCurrency)
});

app.delete('/currencies/:currencyId' ,async (req,res) => {
    const deletedCurrency = await Currency.findByIdAndDelete(req.params.currencyId)
    res.json(deletedCurrency)
})

app.put('/currencies/:currencyId', async (req,res) => {
    const updatedCurrency = await Currency.findByIdAndUpdate(req.params.currencyId, req.body, {new:true})
    res.json(updatedCurrency)
})

app.listen(3001, () => {
  console.log("Listening on Port 3001");
});

// const currencySchema = mongoose.Schema({
//     name: String,
//     countryOfOrigin: String,
//     isoCode: String,
//     denominations: Number,
// })
