const mongoose = require("mongoose");
const validator = require('validator');


const TeacherSchema = mongoose.Schema({
    teacherName: {
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
    teacherPhone: {
        type: String,
        unique: true,
        validate: [validator.isMobilePhone, "Please provide a valid contact number"],
        minLength: 11,
        maxLength: 11,
        required: true,
    },

    teacherId: {
        type: String,
        default: "1000",

    },
    gender: {
        type: String,
        required: true,
        lowercase: true,
    },


    religion: {
        type: String,
        required: true,
        lowercase: true,
    },
    degree: {
        type: String,
        required: true,
        lowercase: true,
    },
    bloodGroup: {
        type: String,
        trim: true,
        uppercase: true,
        required: true,
        enum: {
            values: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-",],
            message: "{VALUE} is not a valid name"
        }
    },

    department: {
        type: String,
        required: true,
        lowercase: true,
    },
    joining: {
        type: Date,

    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (value) => validator.isEmail(value), // Validate the email format
            message: 'Invalid email address',
        },
    },
    facebook: {
        type: String,

    },

    address: {
        type: String,
        required: true,
        lowercase: true,
    },

    title: {
        type: String,
        required: true,
        lowercase: true,
    },
    image: {
        type: String,
        validate: {
            validator: (value) => validator.isURL(value, { protocols: ['http', 'https'], require_tld: true, require_protocol: true }),
            message: 'Invalid image URL',
        },
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        default: '123456',
    },
    role: {
        type: String,
        enum: ["suparAdmin", "admin", "teacher"],
        default: "teacher",
    },
    status: {
        type: String,
        enum: ["active", "deactive"],
        default: "active",
    },

}, {
    timestamps: true,
})

const Teacher = mongoose.model('Teacher', TeacherSchema);
module.exports = Teacher;