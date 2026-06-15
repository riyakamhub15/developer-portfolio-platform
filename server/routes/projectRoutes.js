const express = require("express");

const auth =
require("../middleware/authMiddleware");

const {

addProject,
getProjects,
updateProject,
deleteProject

}
=
require("../controllers/projectController");

const router = express.Router();

router.post(
"/",
auth,
addProject
);

router.get(
"/",
auth,
getProjects
);

router.put(
"/:id",
auth,
updateProject
);

router.delete(
"/:id",
auth,
deleteProject
);

module.exports = router;