const express = require('express')
const paymentController = require('../../controllers/payment.controller')
const router = express.Router();

// student payment
router.route("/student/:id")
    .patch(paymentController.makeExamPayment)

router.route("/student/allPayment")
    .get(paymentController.getAllTotalPayment)
    .post(paymentController.postDayPayment)

module.exports = router;