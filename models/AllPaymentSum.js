const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const AllPaymentSumSchema = mongoose.Schema({

    id: {
        type: String,
        ref: "Teacher",

    },
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