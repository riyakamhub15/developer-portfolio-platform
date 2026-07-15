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