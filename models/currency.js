const mongoose = require('mongoose')

const currencySchema = mongoose.Schema({
    name: String,
    countryOfOrigin: String,
    isoCode: String,
    denominations: Number,
})

const Currency = mongoose.model('Currency', currencySchema)

module.exports = Currency