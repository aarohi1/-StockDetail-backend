const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Float = require('mongoose-float').loadType(mongoose);

const Stock = new Schema(
    {
        _id: {type: String},
        companyName: { type: String },
        symbol: { type: String },
        marketCap: { type: Float },
        currentPrice: { type: Float},
        isDataSave:{type:Boolean}
    },
    { timestamps: true },
)

module.exports = mongoose.model('stocks', Stock);