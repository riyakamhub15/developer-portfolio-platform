function SkillsSection({ skills }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                Skills

            </h2>

            <div className="flex flex-wrap gap-3">

                {

                    skills?.length ?

                    skills.map((skill,index)=>(

                        <span

                            key={index}

                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"

                        >

                            {skill}

                        </span>

                    ))

                    :

                    <p>No Skills Added</p>

                }

            </div>

        </div>

    );

}

export default SkillsSection;