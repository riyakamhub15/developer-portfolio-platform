import ProjectCard from "./ProjectCard";

function ProjectGrid({

    projects

}){

    return(

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {

                projects.map(project=>(

                    <ProjectCard

                        key={project._id}

                        project={project}

                    />

                ))

            }

        </div>

    );

}

export default ProjectGrid;