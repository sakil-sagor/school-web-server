const express = require('express');
const teacherControl = require('../../controllers/teacher.controller');
const router = express.Router();


router.route('/registration')
    .post(teacherControl.createTeacher)
router.route('/login')
    .post(teacherControl.login)


// get all teacher 
router.route("/all")
    .get(teacherControl.getAllTeacher)

router.route('/:teacherPhone')
    .get(teacherControl.getTeacher)




module.exports = router;