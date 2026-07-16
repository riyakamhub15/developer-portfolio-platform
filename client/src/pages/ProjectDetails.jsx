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

                <div className="flex justify-center items-center h-[70vh]">

                    <h1 className="text-2xl font-bold">

                        Loading Project...

                    </h1>

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">

                {

                    project.image && (

                        <img

                            src={project.image}

                            alt={project.title}

                            className="w-full h-72 object-cover rounded-2xl shadow-md mb-8"

                        />

                    )

                }

                <div className="bg-white rounded-2xl shadow-md p-8">

                    <h1 className="text-3xl md:text-4xl font-bold">

                        {project.title}

                    </h1>

                    <p className="text-gray-600 mt-5 leading-7">

                        {project.description}

                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">

                        {

                            project.technologies?.map((tech, index) => (

                                <span

                                    key={index}

                                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"

                                >

                                    {tech}

                                </span>

                            ))

                        }

                    </div>

                    <div className="grid md:grid-cols-2 gap-5 mt-10">

                        <div>

                            <h3 className="font-bold mb-2">

                                GitHub

                            </h3>

                            {

                                project.github ?

                                (

                                    <a

                                        href={project.github}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="text-blue-600 break-all"

                                    >

                                        {project.github}

                                    </a>

                                )

                                :

                                "Not Added"

                            }

                        </div>

                        <div>

                            <h3 className="font-bold mb-2">

                                Live Demo

                            </h3>

                            {

                                project.liveDemo ?

                                (

                                    <a

                                        href={project.liveDemo}

                                        target="_blank"

                                        rel="noreferrer"

                                        className="text-blue-600 break-all"

                                    >

                                        {project.liveDemo}

                                    </a>

                                )

                                :

                                "Not Added"

                            }

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default ProjectDetails;