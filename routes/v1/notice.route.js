const express = require('express')
const noticeController = require('../../controllers/notice.controller')
const router = express.Router();


router.route("/allNotice")
    .post(noticeController.postSingleNotice)
    .get(noticeController.getAllNotice)

router.route("/highlightNotice")
    .post(noticeController.postHighlightNotice)
// .get(noticeController.getHighlightNotice)




module.exports = router;