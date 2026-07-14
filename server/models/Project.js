const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    technologies: [
        {
            type: String
        }
    ],

    github: {
        type: String,
        default: ""
    },

    liveDemo: {
        type: String,
        default: ""
    },

    image: {
        type: String,
        default: ""
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Project", projectSchema);