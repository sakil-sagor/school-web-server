const express = require('express')
const noticeController = require('../../controllers/notice.controller')
const router = express.Router();


router.route("/allNotice")
    .post(noticeController.postSingleNotice)
    .get(noticeController.getAllNotice)




module.exports = router;