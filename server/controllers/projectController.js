const Project = require("../models/Project");

exports.addProject = async (req, res) => {

    try {

        const {
            title,
            description,
            technologies,
            github,
            liveDemo
        } = req.body;

        const project = await Project.create({

            user: req.user.id,

            title,
            description,
            technologies,
            github,
            liveDemo

        });

        res.status(201).json(project);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.getProjects = async (req, res) => {

    try {

        const projects = await Project.find({

            user: req.user.id

        });

        res.status(200).json(projects);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.getProjectById = async (req, res) => {

    try {

        const project = await Project.findById(req.params.id);

        if (!project) {

            return res.status(404).json({
                message: "Project Not Found"
            });

        }

        res.status(200).json(project);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.updateProject = async (req, res) => {

    try {

        const project = await Project.findById(req.params.id);

        if (!project) {

            return res.status(404).json({
                message: "Project Not Found"
            });

        }

        const updatedProject = await Project.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.status(200).json(updatedProject);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.deleteProject = async (req, res) => {

    try {

        const project = await Project.findById(req.params.id);

        if (!project) {

            return res.status(404).json({
                message: "Project Not Found"
            });

        }

        await Project.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Project Deleted Successfully"
        });

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};