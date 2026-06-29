import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ProfileHeader from "../components/ProfileHeader";

import SocialCard from "../components/SocialCard";

import SkillsSection from "../components/SkillsSection";

import AboutSection from "../components/AboutSection";

import Button from "../components/Button";

import { getProfile } from "../services/userService";

function Profile(){

    const [profile,setProfile]=useState(null);

    useEffect(()=>{

        fetchProfile();

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

                    <Button>

                        Edit Profile

                    </Button>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Profile;