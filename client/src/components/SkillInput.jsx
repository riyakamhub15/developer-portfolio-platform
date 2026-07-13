import { useState } from "react";

function SkillInput({ skills, setSkills }) {

    const [skill, setSkill] = useState("");

    const addSkill = () => {

        if (!skill.trim()) return;

        if (skills.includes(skill.trim())) return;

        setSkills([
            ...skills,
            skill.trim()
        ]);

        setSkill("");

    };

    const removeSkill = (index) => {

        const updatedSkills = skills.filter(

            (_, i) => i !== index

        );

        setSkills(updatedSkills);

    };

    return (

        <div>

            <h2 className="text-xl font-bold mb-4">

                Skills

            </h2>

            <div className="flex flex-wrap gap-3 mb-6">

                {

                    skills.map((item,index)=>(

                        <div

                            key={index}

                            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full flex items-center gap-3"

                        >

                            {item}

                            <button

                                onClick={()=>removeSkill(index)}

                                className="text-red-600"

                            >

                                ✕

                            </button>

                        </div>

                    ))

                }

            </div>

            <div className="flex gap-4">

                <input

                    value={skill}

                    onChange={(e)=>setSkill(e.target.value)}

                    placeholder="Add Skill"

                    className="border rounded-lg px-4 py-3 flex-1"

                />

                <button

                    type="button"

                    onClick={addSkill}

                    className="bg-blue-600 text-white px-5 rounded-lg"

                >

                    Add

                </button>

            </div>

        </div>

    );

}

export default SkillInput;