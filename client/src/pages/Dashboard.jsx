import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import { getProfile } from "../services/userService";
import { getProjects } from "../services/projectService";

function Dashboard() {

    const [profile, setProfile] = useState(null);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const [profileRes, projectRes] = await Promise.all([
                getProfile(),
                getProjects()
            ]);

            setProfile(profileRes.data);
            setProjects(projectRes.data);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <DashboardLayout>

                <div className="flex justify-center items-center h-[70vh]">

                    <h1 className="text-2xl font-semibold">

                        Loading Dashboard...

                    </h1>

                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

                {/* Welcome */}

                <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

                    <h1 className="text-3xl md:text-4xl font-bold">

                        Welcome Back, {profile?.name} 👋

                    </h1>

                    <p className="text-gray-500 mt-3">

                        Manage your portfolio from one place.

                    </p>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <p className="text-gray-500">

                            Projects

                        </p>

                        <h2 className="text-4xl font-bold mt-3">

                            {projects.length}

                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <p className="text-gray-500">

                            Skills

                        </p>

                        <h2 className="text-4xl font-bold mt-3">

                            {profile?.skills?.length || 0}

                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <p className="text-gray-500">

                            Portfolio

                        </p>

                        <h2 className="text-2xl font-bold text-green-600 mt-3">

                            Live

                        </h2>

                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6">

                        <p className="text-gray-500">

                            Username

                        </p>

                        <h2 className="text-2xl font-bold mt-3 break-all">

                            @{profile?.username}

                        </h2>

                    </div>

                </div>

                {/* Quick Actions */}

                <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

                    <h2 className="text-2xl font-bold mb-6">

                        Quick Actions

                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        <Link

                            to="/projects"

                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 text-center font-semibold transition"

                        >

                            📁 Manage Projects

                        </Link>

                        <Link

                            to="/profile"

                            className="bg-gray-200 hover:bg-gray-300 rounded-xl py-4 text-center font-semibold transition"

                        >

                            👤 Edit Profile

                        </Link>

                        <Link

                            to={`/portfolio/${profile?.username}`}

                            className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 text-center font-semibold transition"

                        >

                            🌐 View Portfolio

                        </Link>

                    </div>

                </div>

                {/* Recent Projects */}

                <div className="bg-white rounded-2xl shadow-md p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-2xl font-bold">

                            Recent Projects

                        </h2>

                        <Link

                            to="/projects"

                            className="text-blue-600 font-semibold"

                        >

                            View All →

                        </Link>

                    </div>

                    {

                        projects.length === 0 ? (

                            <div className="text-center py-10">

                                <p className="text-gray-500">

                                    No projects added yet.

                                </p>

                            </div>

                        ) : (

                            <div className="grid md:grid-cols-2 gap-5">

                                {

                                    projects.slice(0, 4).map((project) => (

                                        <div

                                            key={project._id}

                                            className="border rounded-xl p-5 hover:shadow-lg transition"

                                        >

                                            <h3 className="text-xl font-bold">

                                                {project.title}

                                            </h3>

                                            <p className="text-gray-600 mt-2 line-clamp-3">

                                                {project.description}

                                            </p>

                                            <div className="flex flex-wrap gap-2 mt-4">

                                                {

                                                    project.technologies?.map((tech, index) => (

                                                        <span

                                                            key={index}

                                                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"

                                                        >

                                                            {tech}

                                                        </span>

                                                    ))

                                                }

                                            </div>

                                            <Link

                                                to={`/projects/${project._id}`}

                                                className="inline-block mt-5 text-blue-600 font-semibold"

                                            >

                                                View Details →

                                            </Link>

                                        </div>

                                    ))

                                }

                            </div>

                        )

                    }

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;