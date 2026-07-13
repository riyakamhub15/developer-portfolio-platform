import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ProfileHeader from "../components/ProfileHeader";

import SocialCard from "../components/SocialCard";

import SkillsSection from "../components/SkillsSection";

import AboutSection from "../components/AboutSection";

import { getProfile, updateProfile } from "../services/userService";

import ProfileForm from "../components/ProfileForm";

import { getProjects } from "../services/projectService";

import RecentProjects from "../components/RecentProjects";

function Profile(){

    const [profile,setProfile]=useState(null);
    const [editing, setEditing] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(()=>{

        fetchProfile();
        fetchProjects();

    },[]);

    const fetchProfile=async()=>{

        try{

            const res=await getProfile();

            setProfile(res.data);

        }

        catch(error){

            console.log(error);

        }

    };

    const fetchProjects = async () => {

    try {

        const response = await getProjects();

        setProjects(response.data);

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

        alert("Profile Updated Successfully!");

    }

    catch (error) {

        alert("Failed to Update Profile");

    }

};

if (!profile) {

    return (

        <DashboardLayout>

            <div className="p-10">

                Loading...

            </div>

        </DashboardLayout>

    );

}
    return(

        <DashboardLayout>

            <div className="max-w-6xl mx-auto p-8">

                <ProfileHeader profile={profile}/>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                    <SocialCard

                        title="Email"

                        value={profile?.email}

                    />

                    <SocialCard

                        title="GitHub"

                        value={profile?.github}

                    />

                    <SocialCard

                        title="LinkedIn"

                        value={profile?.linkedin}

                    />

                    <SocialCard

                        title="Username"

                        value={profile?.username}

                    />

                </div>

                <div className="mt-8">

                    <AboutSection

                        bio={profile?.bio}

                    />

                </div>

                <div className="mt-8">

                    <SkillsSection

                        skills={profile?.skills}

                    />

                </div>

                <div className="mt-10">

    <RecentProjects projects={projects} />

</div>

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

            <button

                onClick={() => setEditing(true)}

                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"

            >

                Edit Profile

            </button>

        )

    }

</div>

            </div>

        </DashboardLayout>

    );

}

export default Profile;