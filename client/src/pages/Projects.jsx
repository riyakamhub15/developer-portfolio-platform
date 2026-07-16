import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ProjectToolbar from "../components/ProjectToolbar";
import EmptyState from "../components/EmptyState";
import ProjectCard from "../components/ProjectCard";
import ProjectForm from "../components/ProjectForm";
import Button from "../components/Button";

import {getProjects, createProject, updateProject, deleteProject} from "../services/projectService";
import { toast } from "react-toastify";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

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

        if (isEditing) {

            await updateProject(selectedProject._id, data);

            toast.success("Project updated successfully!");

        } else {

            await createProject(data);

            toast.success("Project added successfully!");

        }

        await fetchProjects();

        setShowForm(false);

        setSelectedProject(null);

        setIsEditing(false);

    }

    catch (error) {

        console.log(error);

        toast.error("Something went wrong!");

    }

};

   const handleEdit = (project) => {

    setSelectedProject(project);

    setIsEditing(true);

    setShowForm(true);

};

   const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {

        await deleteProject(id);

        toast.success("Project deleted successfully!");

        fetchProjects();

    }

    catch (error) {

        console.log(error);

        toast.error("Failed to delete project");

    }

};

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

return (

    <DashboardLayout>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

            {/* Header */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                <div>

                    <h1 className="text-3xl md:text-4xl font-bold">

                        Projects

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage all your portfolio projects here.

                    </p>

                </div>

                {

                    !showForm && (

                        <Button

                            onClick={() => setShowForm(true)}

                        >

                            + New Project

                        </Button>

                    )

                }

            </div>

            {/* Search */}

            <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

                <ProjectToolbar

                    search={search}

                    setSearch={setSearch}

                />

            </div>

            {/* Form */}

            {

                showForm && (

                    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

                        <ProjectForm

                            project={selectedProject}

                            onSave={handleSave}

                            onCancel={() => {

                                setShowForm(false);

                                setSelectedProject(null);

                                setIsEditing(false);

                            }}

                        />

                    </div>

                )

            }

            {/* Projects */}

            {

                filteredProjects.length === 0 ?

                (

                    <EmptyState />

                )

                :

                (

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

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