const express = require("express");

const {
getPortfolio
}
=
require("../controllers/publicController");

const router = express.Router();

router.get(
"/:username",
getPortfolio
);

module.exports = router;