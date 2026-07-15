import { Link } from "react-router-dom";

function RecentProjects({ projects }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">

                Recent Projects

            </h2>

            {

                projects?.length ? (

                    <div className="space-y-4">

                        {

                            projects.map((project) => (

                                <div
                                    key={project._id}
                                    className="border rounded-lg p-4"
                                >

                                    <h3 className="text-xl font-semibold">

                                        {project.title}

                                    </h3>

                                    <p className="text-gray-600 mt-2">

                                        {project.description}

                                    </p>

                                    <Link
                                        to={`/projects/${project._id}`}
                                        className="text-blue-600 font-semibold mt-3 inline-block"
                                    >

                                        View Project →

                                    </Link>

                                </div>

                            ))

                        }

                    </div>

                ) : (

                    <p>No projects added yet.</p>

                )

            }

        </div>

    );

}

export default RecentProjects;