
const { getSingleSearchStudent, updateFee, createSingleDayPayment, getAllDayPayment } = require("../services/payment.service");
const { getAllStudents } = require("../services/student.service");
const { findTeacherByPhone, createTeacherService, getAllTeachers } = require("../services/teacher.service");
const { generateToken } = require("../utils/token");


exports.makeExamPayment = async (req, res, next) => {
    try {

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

exports.getAllTotalPayment = async (req, res, next) => {
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


exports.getAllByDayPayment = async (req, res, next) => {
    try {
        const allPayments = await getAllDayPayment();
        let examfeeTotal = 0;
        let sessionfeeTotal = 0;
        let monthlyfeeTotal = 0;


        allPayments.forEach((student) => {
            // Sum the payment values for each category
            examfeeTotal += student.examfee;
            sessionfeeTotal += student.sessionfee;
            monthlyfeeTotal += student.monthlyfee;
        });
        const paymentSummary = {
            examfeeTotal,
            sessionfeeTotal,
            monthlyfeeTotal,
        };

        res.status(200).json({
            status: "success",
            data: allPayments,
            payment: paymentSummary,
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the Students",
        });
    }
}



exports.postDayPayment = async (req, res, next) => {
    try {
        const student = await createSingleDayPayment(req.body);
  
        res.status(200).json({
            status: "success",
            message: "Successfully Added Student",
            data: student,
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create student",
            error: error.message,

        });
    }

}


