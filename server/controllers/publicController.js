const User = require("../models/User");
const Project = require("../models/Project");

exports.getPortfolio = async (req, res) => {

    try {

        const username = req.params.username;

        const user = await User.findOne({

            username

        }).select("-password");

        if (!user) {

            return res.status(404).json({

                message: "Portfolio Not Found"

            });

        }

        const projects = await Project.find({

            user: user._id

        });

        res.status(200).json({

            user,

            projects

        });

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};