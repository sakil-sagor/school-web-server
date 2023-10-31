const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const AllPaymentSumSchema = mongoose.Schema({
    allTypeFee: [
        {
            date: {
                type: Date,
                default: Date.now,
            },
            examfee: Number,
            sessionfee: Number,
            monthlyfee: Number,
            total: Number,
        },
    ],

})

const AllPaymentSum = mongoose.model('AllPaymentSum', AllPaymentSumSchema);
module.exports = AllPaymentSum;