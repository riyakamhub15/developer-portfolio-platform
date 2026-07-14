const express = require("express");

const router = express.Router();

const {

    getPortfolio

} = require("../controllers/publicController");

router.get(

    "/:username",

    getPortfolio

);

module.exports = router;