function RecentProjects({ projects }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-5">

                Recent Projects

            </h2>

            {

                projects.length === 0 ?

                    <p>No Projects Added</p>

                    :

                    projects.map((project) => (

                        <div

                            key={project._id}

                            className="border-b py-3"

                        >

                            <h3 className="font-semibold">

                                {project.title}

                            </h3>

                            <p className="text-gray-500">

                                {project.description}

                            </p>

                        </div>

                    ))

            }

        </div>

    );

}

export default RecentProjects;