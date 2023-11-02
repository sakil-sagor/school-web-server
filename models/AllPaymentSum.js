const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const AllPaymentSumSchema = mongoose.Schema({


    // date: {
    //     type: Date,
    //     default: Date.now,
    // },
    examfee: {
        type: Number,
        required: true,
    },
    sessionfee: {
        type: Number,
        required: true,
    },
    monthlyfee: {
        type: Number,
        required: true,
    },



}, {
    timestamps: true,
})

const AllPaymentSum = mongoose.model('AllPaymentSum', AllPaymentSumSchema);
module.exports = AllPaymentSum;