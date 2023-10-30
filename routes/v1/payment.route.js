const express = require('express')
const paymentController = require('../../controllers/payment.controller')
const router = express.Router();

// student payment
router.route("/student/:id")
    .patch(paymentController.makeExamPayment)



module.exports = router;