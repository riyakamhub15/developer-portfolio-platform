import { useState, useEffect } from "react";
import Button from "./Button";
import SkillInput from "./SkillInput";

function ProfileForm({ profile, onSave, onCancel }) {

    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        github: "",
        linkedin: "",
        skills: []
    });

    useEffect(() => {

        if (profile) {

            setFormData({
                name: profile.name || "",
                bio: profile.bio || "",
                github: profile.github || "",
                linkedin: profile.linkedin || "",
                skills: profile.skills || []
            });

        }

    }, [profile]);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave(formData);

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-md p-8 mt-10"
        >

            <h2 className="text-3xl font-bold mb-8">

                Edit Profile

            </h2>

            {/* Name */}

            <div className="mb-5">

                <label className="block font-semibold mb-2">

                    Name

                </label>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="Enter your name"
                />

            </div>

            {/* Bio */}

            <div className="mb-5">

                <label className="block font-semibold mb-2">

                    Bio

                </label>

                <textarea
                    rows="4"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="Tell us about yourself"
                />

            </div>

            {/* GitHub */}

            <div className="mb-5">

                <label className="block font-semibold mb-2">

                    GitHub

                </label>

                <input
                    type="text"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="https://github.com/username"
                />

            </div>

            {/* LinkedIn */}

            <div className="mb-5">

                <label className="block font-semibold mb-2">

                    LinkedIn

                </label>

                <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-3"
                    placeholder="https://linkedin.com/in/username"
                />

            </div>

            {/* Skills */}

            <div className="mb-8">

                <SkillInput
                    skills={formData.skills}
                    setSkills={(skills) =>
                        setFormData({
                            ...formData,
                            skills
                        })
                    }
                />

            </div>

           <div className="flex gap-4">

    <Button type="submit">

        Save Changes

    </Button>

    <button

        type="button"

        onClick={onCancel}

        className="px-6 py-3 rounded-lg bg-gray-300 hover:bg-gray-400"

    >

        Cancel

    </button>

</div>

        </form>

    );

}

export default ProfileForm;