const express = require("express");
const router = express.Router();
const controller = require("../Nodejs/Controller/movieController");

router.post("/booking", controller.storeBooking);
router.get("/booking", controller.getBooking);

module.exports = router;
