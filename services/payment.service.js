const AllPaymentSum = require("../models/AllPaymentSum");
const Student = require("../models/Student");

exports.getSingleSearchStudent = async (id) => {
    const student = await Student.findOne({ _id: id })
    return student;
}

exports.updateFee = async (id, money, type, payOption) => {
    const result = await Student.updateOne({ _id: id }, { $set: { [`payment.${type}.${payOption}`]: money } }, { runValidators: true });
    return result;
}

exports.createSingleDayPayment = async (detials) => {
    // console.log(detials);
    // const { examfee, sessionfee, monthlyfee } = detials;
    // const newFee = new AllPaymentSum({ examfee, sessionfee, monthlyfee });
    // console.log(newFee);
    // const dayPayment = await newFee.save();
    console.log(detials);
    const studentAdd = await AllPaymentSum.create(detials);
    console.log(studentAdd);
    return studentAdd;
}