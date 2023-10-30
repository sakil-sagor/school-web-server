const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")


// middlewares
app.use(express.json());

app.use(cors());

//routes
const studentRoute = require('./routes/v1/student.route')
const teacherRoute = require("./routes/v1/teacher.route")
const paymentRoute = require("./routes/v1/payment.route")


app.use("/api/v1/teacher", teacherRoute)
app.use("/api/v1/student", studentRoute)
app.use("/api/v1/payment", paymentRoute)




module.exports = app;

