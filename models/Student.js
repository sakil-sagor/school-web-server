const mongoose = require("mongoose");
const validator = require('validator');


const StudentSchema = mongoose.Schema({
    studentsName: {
        type: String,
        required: [true, "Please provide teacher name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],

    },
    fatherName: {
        type: String,
        required: [true, "Please provide father name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],

    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
    },
    phone: {
        type: String,
        validate: [validator.isMobilePhone, "Please provide a valid contact number"],
        minLength: 11,
        maxLength: 11,
        required: true,
    },
    classRoll: {
        type: String,
        required: true,
    },

    religion: {
        type: String,
        required: true,
        lowercase: true,
    },
    shift: {
        type: String,
        required: true,
        lowercase: true,
    },

    bloodGroup: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,

    },

    nameOfClass: {
        type: String,
        required: true,
        lowercase: true,
    },
    section: {
        type: String,
        required: true,
        lowercase: true,
    },

    address: {
        type: String,
        required: true,
        lowercase: true,
    },

    payment: {
        examfee: {
            halfYear: {
                type: Number,
            },
            fullYear: {
                type: Number,
            },
            pretest: {
                type: Number,
            },
            test: {
                type: Number,
            },
        },
        sessionfee: {
            admission: {
                type: Number,
            },
            session: {
                type: Number,
            },

        },
        monthlyfee: {
            january: {
                type: Number,
            },
            february: {
                type: Number,
            },
            march: {
                type: Number,
            },
            april: {
                type: Number,
            },
            may: {
                type: Number,
            },
            june: {
                type: Number,
            },
            july: {
                type: Number,
            },
            august: {
                type: Number,
            },
            september: {
                type: Number,
            },
            october: {
                type: Number,
            },
            november: {
                type: Number,
            },
            december: {
                type: Number,
            },
        },



    },

    studentId: {
        type: String,
        unique: true,
    },

    status: {
        type: String,
        enum: ["active", "deactive", "Tc",],
        default: "active",
    },


}, {
    timestamps: true,
})

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;