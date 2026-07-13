import Button from "./Button";

function ProjectCard({ project, onEdit, onDelete }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

            <h2 className="text-2xl font-bold">

                {project.title}

            </h2>

            <p className="text-gray-600 mt-3">

                {project.description}

            </p>

            <div className="flex flex-wrap gap-2 mt-5">

                {

                    project.technologies?.map((tech,index)=>(

                        <span

                            key={index}

                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"

                        >

                            {tech}

                        </span>

                    ))

                }

            </div>

            <div className="flex gap-3 mt-6">

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

        </div>

    );

}

export default ProjectCard;