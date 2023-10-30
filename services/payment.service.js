const Student = require("../models/Student");

exports.getSingleSearchStudent = async (id) => {
    const student = await Student.findOne({ _id: id })
    return student;
}

exports.updateFee = async (id, money, type, payOption) => {
    const result = await Student.updateOne({ _id: id }, { $set: { [`payment.${type}.${payOption}`]: money } }, { runValidators: true });
    return result;
}
