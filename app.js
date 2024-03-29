const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose")


// middlewares

app.use(cors({
    origin: ['http://localhost:5173', 'https://school-web-sakil.netlify.app'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//routes
const studentRoute = require('./routes/v1/student.route')
const teacherRoute = require("./routes/v1/teacher.route")
const noticeRoute = require("./routes/v1/notice.route")
const paymentRoute = require("./routes/v1/payment.route");



app.use("/api/v1/teacher", teacherRoute)
app.use("/api/v1/student", studentRoute)
app.use("/api/v1/notice", noticeRoute)
app.use("/api/v1/payment", paymentRoute)




module.exports = app;

