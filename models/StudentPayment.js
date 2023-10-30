const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;


const StudentPaymentSchema = mongoose.Schema({
    // id: {
    //     type: ObjectId,
    //     ref: "Student",
    //     required: true,
    // },
    examFee: {
        halfYear: {
            type: Number,
        },
        fullYear: {
            type: Number,
        },
        halfYear: {
            type: Number,
        },

    }

}, {
    timestamps: true,
})

const StudentPayment = mongoose.model('StudentPayment', StudentPaymentSchema);
module.exports = StudentPayment;