const express = require('express');
const studentController = require('../../controllers/student.controllers')
const router = express.Router();



// add single student 
router.route('/registration')
    .post(studentController.createStudent)

// get all students
router.route("/all")
    .get(studentController.getAllStudent)
// search student single 
router.route("/")
    .get(studentController.getSearchStudent)

module.exports = router;