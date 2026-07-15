import Button from "./Button";
import { Link } from "react-router-dom";

function ProjectCard({ project, onEdit, onDelete }) {

    return (

        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">

            {/* Project Image */}

            {

                project.image && (

                    <img

                        src={project.image}

                        alt={project.title}

                        className="w-full h-48 object-cover"

                    />

                )

            }

            <div className="p-5">

                <h2 className="text-xl md:text-2xl font-bold break-words">

                    {project.title}

                </h2>

                <p className="text-gray-600 mt-3 line-clamp-3 break-words">

                    {project.description}

                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

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

                {/* Buttons */}

                <div className="flex flex-col sm:flex-row gap-3 mt-6">

                    <Button

                        onClick={() => onEdit(project)}

                    >

                        Edit

                    </Button>

                    <Button

                        variant="danger"

                        onClick={() => onDelete(project._id)}

                    >

                        Delete

                    </Button>

                </div>

                <Link

                    to={`/projects/${project._id}`}

                    className="inline-block mt-4 text-blue-600 font-semibold hover:underline"

                >

                    View Details →

                </Link>

            </div>

        </div>

    );

}

export default ProjectCard;