import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import { getProjectById } from "../services/projectService";

function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {

        fetchProject();

    }, []);

    const fetchProject = async () => {

        try {

            const res = await getProjectById(id);

            setProject(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    if (!project) {

        return (

            <DashboardLayout>

                <div className="p-10">

                    Loading...

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="max-w-5xl mx-auto p-8">

                <h1 className="text-4xl font-bold">

                    {project.title}

                </h1>

                <p className="text-gray-600 mt-4">

                    {project.description}

                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                    {

                        project.technologies.map((tech,index)=>(

                            <span

                                key={index}

                                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"

                            >

                                {tech}

                            </span>

                        ))

                    }

                </div>

                <div className="mt-8 space-y-3">

                    <p>

                        <strong>GitHub:</strong>

                        {project.github || "Not Added"}

                    </p>

                    <p>

                        <strong>Live Demo:</strong>

                        {project.liveDemo || "Not Added"}

                    </p>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default ProjectDetails;