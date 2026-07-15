import { useState, useEffect } from "react";
import Button from "./Button";

function ProjectForm({ onSave, project, onCancel }) {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        technologies: "",
        github: "",
        liveDemo: ""
    });

    useEffect(() => {

        if (project) {

            setFormData({
                title: project.title || "",
                description: project.description || "",
                technologies: project.technologies
                    ? project.technologies.join(", ")
                    : "",
                github: project.github || "",
                liveDemo: project.liveDemo || ""
            });

        }

    }, [project]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave({
            ...formData,
            technologies: formData.technologies
                .split(",")
                .map((tech) => tech.trim())
                .filter(Boolean)
        });

    };

    return (

        <form

            onSubmit={handleSubmit}

            className="bg-white rounded-xl shadow-lg p-5 md:p-8 w-full max-w-3xl mx-auto"

        >

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">

                {project ? "Edit Project" : "Add New Project"}

            </h2>

            <div className="space-y-6">

                <div>

                    <label className="block font-semibold mb-2">

                        Project Title

                    </label>

                    <input

                        type="text"

                        name="title"

                        value={formData.title}

                        onChange={handleChange}

                        className="w-full border rounded-lg px-4 py-3"

                    />

                </div>

                <div>

                    <label className="block font-semibold mb-2">

                        Description

                    </label>

                    <textarea

                        rows="5"

                        name="description"

                        value={formData.description}

                        onChange={handleChange}

                        className="w-full border rounded-lg px-4 py-3"

                    />

                </div>

                <div>

                    <label className="block font-semibold mb-2">

                        Technologies

                    </label>

                    <input

                        type="text"

                        name="technologies"

                        value={formData.technologies}

                        onChange={handleChange}

                        placeholder="React, Node, MongoDB"

                        className="w-full border rounded-lg px-4 py-3"

                    />

                </div>

                <div>

                    <label className="block font-semibold mb-2">

                        GitHub Link

                    </label>

                    <input

                        type="url"

                        name="github"

                        value={formData.github}

                        onChange={handleChange}

                        className="w-full border rounded-lg px-4 py-3"

                    />

                </div>

                <div>

                    <label className="block font-semibold mb-2">

                        Live Demo Link

                    </label>

                    <input

                        type="url"

                        name="liveDemo"

                        value={formData.liveDemo}

                        onChange={handleChange}

                        className="w-full border rounded-lg px-4 py-3"

                    />

                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">

                    <Button type="submit">

                        {project ? "Update Project" : "Add Project"}

                    </Button>

                    <Button

                        type="button"

                        variant="secondary"

                        onClick={onCancel}

                    >

                        Cancel

                    </Button>

                </div>

            </div>

        </form>

    );

}

export default ProjectForm;