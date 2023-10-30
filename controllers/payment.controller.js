
const { getSingleSearchStudent, updateFee } = require("../services/payment.service");
const { findTeacherByPhone, createTeacherService, getAllTeachers } = require("../services/teacher.service");
const { generateToken } = require("../utils/token");


exports.makeExamPayment = async (req, res, next) => {
    try {
        console.log(req.body);
        const { money, payOption, type } = { ...req.body }

        const { id } = req.params;

        const getId = await getSingleSearchStudent(id)
        const newResult = getId.payment[type][payOption];
        if (newResult > 0) {
            res.status(400)
            throw new Error("")
        }
        const data = await updateFee(id, money, type, payOption)
        res.status(200).json({
            status: "Success",
            message: "Successfully Added Fee",
            data
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Could't Added Fee"
        })
    }

}
