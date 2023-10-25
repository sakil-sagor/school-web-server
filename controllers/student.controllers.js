const { createStudentService, getAllStudents, getSingleSearchStudent } = require("../services/student.service");



// create single student 
exports.createStudent = async (req, res) => {
    try {
        const totalStudents = await getAllStudents();
        const currentDate = new Date();
        const year = currentDate.getFullYear() % 100


        let studentId = `${new Date().getFullYear() % 100}${totalStudents.length + 1001}`;

        const studentDetails = { ...req.body, studentId };
        console.log(studentDetails)
        const teacher = await createStudentService(studentDetails);
        console.log(teacher)
        res.status(200).json({
            status: "success",
            message: "Successfully signed up",
            data: teacher,
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't create teacher",
            error: error.message,

        });
    }
}


// get all students 
exports.getAllStudent = async (req, res) => {
    try {
        console.log("req")
        const allStudents = await getAllStudents();
        res.status(200).json({
            status: "success",
            data: allStudents
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the Students",
        });
    }
}

// search single student 

exports.getSearchStudent = async (req, res) => {
    try {
        let studentId = req.query.search;
        const student = await getSingleSearchStudent(studentId)
        res.status(200).json({
            status: "success",

            student,

        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Couldn't find donor",
            error: error.message,
        });
    }
}
