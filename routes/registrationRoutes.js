const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/registrationController");

router.post("/registration", registerUser);

module.exports = router;
