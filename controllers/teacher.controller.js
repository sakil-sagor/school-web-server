const {
  findTeacherByPhone,
  createTeacherService,
  getAllTeachers,
} = require("../services/teacher.service");
const { generateToken } = require("../utils/token");

exports.createTeacher = async (req, res) => {
  try {
    const { teacherPhone, teacherId } = req.body;

    const userExistsByPhone = await findTeacherByPhone(teacherPhone);

    if (userExistsByPhone) {
      res.status(400);
      throw new Error("This Phone already exists");
    }

    const teacher = await createTeacherService(req.body);

    const other = {
      details:
        "ASDF9074LJD0943MAMALDM35R65GI840943MAOE354FAS98Q7G0943J09745ADLAG0943MAPOG-0485",
      security:
        "AKOPSDFO1290943MALDM35R65GI840943MAOE354FAS98Q7G0943MA0XC735M643L34KGM7345MNH7",
      teacherPhone: teacher.teacherPhone,
    };
    const token = generateToken(teacher);
    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
      data: { other, token },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create teacher",
      error: error.message,
    });
  }
};
// teacher login system
exports.login = async (req, res) => {
  try {
    const { teacherPhone, password } = req.body;
    if (!teacherPhone || !password) {
      return res.status(401).json({
        status: "fail",
        error: "please provide your credentials",
      });
    }
    const teacher = await findTeacherByPhone(teacherPhone);
    if (!teacher) {
      return res.status(401).json({
        status: "fail",
        error: "No user found, please create an account",
      });
    }
    // password matching
    if (teacher.password !== password) {
      return res.status(403).json({
        status: "fail",
        error: "Invalid email or password",
      });
    }
    // jwt token
    const token = generateToken(teacher);
    const other = {
      details:
        "ASDF9074LJD0943MAMALDM35R65GI840943MAOE354FAS98Q7G0943J09745ADLAG0943MAPOG-0485",
      security:
        "AKOPSDFO1290943MALDM35R65GI840943MAOE354FAS98Q7G0943MA0XC735M643L34KGM7345MNH7",
      teacherPhone: teacher.teacherPhone,
    };
    res.status(200).json({
      status: "success",
      message: "Successfully loged in",
      data: { other, token },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail to login",
      error,
    });
  }
};

// get teacher for context api
exports.getTeacher = async (req, res) => {
  try {
    const { teacherPhone } = req.params;

    const teacher = await findTeacherByPhone(teacherPhone);

    const { password: pwd, ...other } = teacher.toObject();
    if (other.role === "teacher") {
      res.status(200).json({
        status: "success",
        data: other,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the admin",
    });
  }
};

// get all teachers
exports.getAllTeacher = async (req, res) => {
  try {
    const allTeacher = await getAllTeachers();

    res.status(200).json({
      status: "success",
      data: allTeacher,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the teachers",
    });
  }
};

// exports.deleteDonor = async (req, res) => {
//     try {

//         const { id } = req.params;
//         const data = await deleteDonorById(id)
//         res.status(200).json({
//             status: "success",
//             data: data,

//         })
//     } catch (error) {
//         res.status(400).json({
//             status: "fail",
//             error: "Couldn't delete the donor",
//         });
//     }
// }

// exports.getDonor = async (req, res) => {
//     try {

//         const { contactNumber } = req.params;
//         const donor = await findDonorByPhone(contactNumber)
//         const { password: pwd, ...other } = donor.toObject();
//         res.status(200).json({
//             status: "success",
//             data: other
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: "fail",
//             error: "Couldn't get the donor",
//         });
//     }
// }
// exports.updateDonor = async (req, res) => {
//     try {
//         const userExistsByPhone = await findDonorByPhone(req.body.contactNumber);
//         if (userExistsByPhone) {
//             res.status(400)
//             throw new Error("User Phone already exists")
//         }

//         const { contactNumber } = req.params;
//         const result = await updateDonor(contactNumber, req.body)
//         res.status(200).json({
//             status: "success",
//             message: "Data inserted successfully",
//             data: result,
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: "fail",
//             message: "Product update fail",
//             error: error.message
//         })
//     }
// }
