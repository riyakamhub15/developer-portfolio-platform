import { Link } from "react-router-dom";

function RecentProjects({ projects = [] }) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold">

                    Recent Projects

                </h2>

            </div>

            {

                projects.length === 0 ?

                (

                    <p className="text-gray-500">

                        No projects added yet.

                    </p>

                )

                :

                (

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {

                            projects.slice(0, 4).map((project) => (

                                <div

                                    key={project._id}

                                    className="border rounded-xl p-5 hover:shadow-md transition"

                                >

                                    <h3 className="text-xl font-bold">

                                        {project.title}

                                    </h3>

                                    <p className="text-gray-600 mt-3 line-clamp-3">

                                        {project.description}

                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">

                                        {

                                            project.technologies?.map((tech, index) => (

                                                <span

                                                    key={index}

                                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"

                                                >

                                                    {tech}

                                                </span>

                                            ))

                                        }

                                    </div>

                                    <Link

                                        to={`/projects/${project._id}`}

                                        className="inline-block mt-5 text-blue-600 font-semibold"

                                    >

                                        View Details →

                                    </Link>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default RecentProjects;