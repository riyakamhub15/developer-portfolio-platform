const express = require("express");

const auth = require("../middleware/authMiddleware");

const {getProfile, updateProfile, updateProfileImage} = require("../controllers/userController");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

router.get("/profile", auth, getProfile);

router.put("/profile", auth, updateProfile);

router.put(
    "/profile/image",
    auth,
    upload.single("image"),
    updateProfileImage
);

module.exports = router;