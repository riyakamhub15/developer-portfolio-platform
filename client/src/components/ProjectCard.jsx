import Button from "./Button";

function ProjectCard({

    project,

    onDelete,

    onEdit

}){

    return(

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <img

                src={
                    project.image ||
                    "https://picsum.photos/600/300"
                }

                alt="project"

                className="w-full h-48 object-cover"

            />

            <div className="p-6">

                <h2 className="text-2xl font-bold">

                    {project.title}

                </h2>

                <p className="text-gray-500 mt-3">

                    {project.description}

                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                    {

                        project.techStack.map(

                            (tech,index)=>(

                                <span

                                    key={index}

                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"

                                >

                                    {tech}

                                </span>

                            )

                        )

                    }

                </div>

                <div className="flex gap-3 mt-6">

                    <Button>

                        GitHub

                    </Button>

                    <Button variant="secondary">

                        Live Demo

                    </Button>

                </div>

                <div className="flex gap-3 mt-4">

                    <Button

                        onClick={()=>onEdit(project)}

                    >

                        Edit

                    </Button>

                    <Button

                        variant="danger"

                        onClick={()=>onDelete(project)}

                    >

                        Delete

                    </Button>

                </div>

            </div>

        </div>

    );

}

export default ProjectCard;