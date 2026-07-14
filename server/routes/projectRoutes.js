const express = require("express");

const auth =
require("../middleware/authMiddleware");

const {

 addProject,
    getProjects,
    getProjectById,
    updateProject,
    deleteProject

}
=
require("../controllers/projectController");

const router = express.Router();

router.get("/", auth, getProjects);

router.post("/", auth, addProject);

router.get("/:id", auth, getProjectById);

router.put("/:id", auth, updateProject);

router.delete("/:id", auth, deleteProject);

module.exports = router;