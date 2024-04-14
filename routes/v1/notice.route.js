const express = require("express");
const noticeController = require("../../controllers/notice.controller");
const router = express.Router();

router
  .route("/allNotice")
  .post(noticeController.postSingleNotice)
  .get(noticeController.getAllNotice);

router
  .route("/highlightNotice")
  .post(noticeController.postHighlightNotice)
  .get(noticeController.getAllHighlighNotice)
  .delete(noticeController.deleteHighlightNotice);

module.exports = router;
