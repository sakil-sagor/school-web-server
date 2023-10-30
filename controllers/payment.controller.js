
const { getSingleSearchStudent, updateFee } = require("../services/payment.service");
const { getAllStudents } = require("../services/student.service");
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
exports.creatSingleDayPayment = async (req, res, next) => {
    try {
        const allStudents = await getAllStudents();

        let examfeeTotal = 0;
        let sessionfeeTotal = 0;
        let monthlyfeeTotal = 0;

        allStudents.forEach((student) => {
            // Sum the payment values for each category
            examfeeTotal += student.payment.examfee.halfYear + student.payment.examfee.fullYear + student.payment.examfee.pretest + student.payment.examfee.test;
            sessionfeeTotal += student.payment.sessionfee.admission + student.payment.sessionfee.session;
            monthlyfeeTotal += Object.values(student.payment.monthlyfee).reduce((acc, val) => acc + val, 0);
        });
        const paymentSummary = {
            examfeeTotal,
            sessionfeeTotal,
            monthlyfeeTotal,
        };
        console.log(paymentSummary);


        res.status(200).json({
            status: "Success",
            paymentSummary
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Could't Added Fee"
        })
    }

}


