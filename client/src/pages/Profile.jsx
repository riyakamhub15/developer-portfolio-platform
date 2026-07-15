import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import DashboardLayout from "../layouts/DashboardLayout";

import ProfileHeader from "../components/ProfileHeader";
import SocialCard from "../components/SocialCard";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ProfileForm from "../components/ProfileForm";
import RecentProjects from "../components/RecentProjects";

import {
    getProfile,
    updateProfile
} from "../services/userService";

import { getProjects } from "../services/projectService";

function Profile() {

    const [profile, setProfile] = useState(null);

    const [projects, setProjects] = useState([]);

    const [editing, setEditing] = useState(false);

    useEffect(() => {

        fetchProfile();

        fetchProjects();

    }, []);

    const fetchProfile = async () => {

        try {

            const res = await getProfile();

            setProfile(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const fetchProjects = async () => {

        try {

            const res = await getProjects();

            setProjects(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    const handleSave = async (data) => {

        try {

            await updateProfile(data);

            await fetchProfile();

            setEditing(false);

            toast.success("Profile Updated Successfully!");

        }

        catch (error) {

            console.log(error);

            toast.error("Failed to Update Profile");

        }

    };

    if (!profile) {

        return (

            <DashboardLayout>

                <div className="flex justify-center items-center h-[70vh]">

                    <h1 className="text-2xl font-bold">

                        Loading Profile...

                    </h1>

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="max-w-6xl mx-auto px-4 py-6 md:px-6 lg:px-8">

                {/* Header */}

                <ProfileHeader profile={profile} />

                {/* Social Cards */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                    <SocialCard

                        title="Email"

                        value={profile.email}

                    />

                    <SocialCard

                        title="GitHub"

                        value={profile.github}

                    />

                    <SocialCard

                        title="LinkedIn"

                        value={profile.linkedin}

                    />

                    <SocialCard

                        title="Username"

                        value={profile.username}

                    />

                </div>

                {/* About */}

                <div className="mt-8">

                    <AboutSection

                        bio={profile.bio}

                    />

                </div>

                {/* Skills */}

                <div className="mt-8">

                    <SkillsSection

                        skills={profile.skills}

                    />

                </div>

                {/* Recent Projects */}

                <div className="mt-8">

                    <RecentProjects

                        projects={projects}

                    />

                </div>

                {/* Edit Profile */}

                <div className="mt-10">

                    {

                        editing ?

                        (

                            <ProfileForm

                                profile={profile}

                                onSave={handleSave}

                                onCancel={() => setEditing(false)}

                            />

                        )

                        :

                        (

                            <div className="flex justify-center">

                                <button

                                    onClick={() => setEditing(true)}

                                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"

                                >

                                    Edit Profile

                                </button>

                            </div>

                        )

                    }

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Profile;