import SkillBadge from "./SkillBadge";

function SkillsSection({

    skills

}) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                Skills

            </h2>

            <div className="flex flex-wrap gap-3">

                {

                    skills?.map((skill,index)=>(

                        <SkillBadge

                            key={index}

                            skill={skill}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default SkillsSection;