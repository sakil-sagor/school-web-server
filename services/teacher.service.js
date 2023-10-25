const Teacher = require("../models/Teacher");

exports.getAllTeachers = async () => {
    const result = await Teacher.find();
    return result;
}


exports.createTeacherService = async (teacherInfo) => {
    const teacherAdd = await Teacher.create(teacherInfo);
    return teacherAdd;
}

exports.findTeacherByPhone = async (teacherPhone) => {
    const teacher = await Teacher.findOne({ teacherPhone });
    return teacher;
}
