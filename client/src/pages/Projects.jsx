import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ProjectToolbar from "../components/ProjectToolbar";
import EmptyState from "../components/EmptyState";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import Button from "../components/Button";

import {
    getProjects,
    createProject
} from "../services/projectService";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {

        fetchProjects();

    }, []);

    const fetchProjects = async () => {

        try {

            const res = await getProjects();

            setProjects(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleSave = async (data) => {

        try {

            await createProject(data);

            await fetchProjects();

            setShowForm(false);

            alert("Project Added Successfully!");

        }

        catch (error) {

            console.log(error);

            alert("Failed to Add Project");

        }

    };

    const handleEdit = (project) => {

        console.log("Edit:", project);

    };

    const handleDelete = (id) => {

        console.log("Delete:", id);

    };

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <DashboardLayout>

            <div className="p-8">

                <div className="flex justify-between items-center mb-6">

                    <h1 className="text-4xl font-bold">

                        Projects

                    </h1>

                    {

                        !showForm && (

                            <Button
                                onClick={() => setShowForm(true)}
                            >

                                Add Project

                            </Button>

                        )

                    }

                </div>

                <ProjectToolbar
                    search={search}
                    setSearch={setSearch}
                />

                {

                    showForm && (

                        <div className="my-8">

                            <ProjectForm
                                onSave={handleSave}
                                onCancel={() => setShowForm(false)}
                            />

                        </div>

                    )

                }

                {

                    filteredProjects.length === 0 ?

                        (

                            <EmptyState />

                        )

                        :

                        (

                            <div className="grid md:grid-cols-2 gap-6 mt-8">

                                {

                                    filteredProjects.map((project) => (

                                        <ProjectCard

                                            key={project._id}

                                            project={project}

                                            onEdit={handleEdit}

                                            onDelete={handleDelete}

                                        />

                                    ))

                                }

                            </div>

                        )

                }

            </div>

        </DashboardLayout>

    );

}

export default Projects;