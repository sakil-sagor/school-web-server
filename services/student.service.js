const Student = require("../models/Student");
const StudentPayment = require("../models/StudentPayment");

exports.getAllStudents = async () => {
    const result = await Student.find();
    return result;
}

// search single stueden by id 
exports.getSingleSearchStudent = async (id) => {
    const student = await Student.find({ studentId: id })
    return student;
}


exports.createStudentService = async (studentDetails) => {
    const studentAdd = await Student.create(studentDetails);
    return studentAdd;
}