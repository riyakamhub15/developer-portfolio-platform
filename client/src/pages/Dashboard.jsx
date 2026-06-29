import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import DashboardHeader from "../components/DashboardHeader";

import DashboardCard from "../components/DashboardCard";

import QuickActions from "../components/QuickActions";

import RecentProjects from "../components/RecentProjects";

import { getProfile } from "../services/userService";

import { getProjects } from "../services/projectService";

function Dashboard() {

    const [profile, setProfile] = useState(null);

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            const profileRes = await getProfile();

            const projectRes = await getProjects();

            setProfile(profileRes.data);

            setProjects(projectRes.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <DashboardLayout>

            <DashboardHeader
                name={profile?.name}
            />

            <div className="p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <DashboardCard
                        title="Projects"
                        value={projects.length}
                    />

                    <DashboardCard
                        title="Skills"
                        value={profile?.skills.length || 0}
                    />

                    <DashboardCard
                        title="Portfolio Views"
                        value="0"
                    />

                    <DashboardCard
                        title="Visitors"
                        value="0"
                    />

                </div>

                <QuickActions />

                <RecentProjects
                    projects={projects}
                />

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;