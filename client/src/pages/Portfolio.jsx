import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SkillBadge from "../components/SkillBadge";
import Loader from "../components/Loader";

function Portfolio() {

    const { username } = useParams();

    const [portfolio, setPortfolio] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const fetchPortfolio = async () => {

            try {

                const response = await axios.get(
                    `http://localhost:5000/api/portfolio/${username}`
                );

                setPortfolio(response.data);

            }

            catch (err) {

                console.log(err);

                setError("Portfolio not found.");

            }

            finally {

                setLoading(false);

            }

        };

        fetchPortfolio();

    }, [username]);



    if (loading) {

        return <Loader />;

    }

    if (error) {

        return (

            <div className="text-center mt-20">

                <h1 className="text-3xl text-red-600 font-bold">

                    {error}

                </h1>

            </div>

        );

    }

    return (

        <>

            <Navbar />

            <div className="max-w-6xl mx-auto px-6 py-10">

                {/* Profile Section */}

                <div className="bg-white shadow-lg rounded-xl p-8">

                    <div className="flex flex-col items-center">

                        <img

                            src={
                                portfolio.user.profilePic ||
                                "https://via.placeholder.com/150"
                            }

                            alt="Profile"

                            className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"

                        />

                        <h1 className="text-4xl font-bold mt-5">

                            {portfolio.user.name}

                        </h1>

                        <p className="text-gray-600 mt-2">

                            {portfolio.user.bio}

                        </p>

                        <div className="flex gap-6 mt-5">

                            <a

                                href={portfolio.user.github}

                                target="_blank"

                                rel="noreferrer"

                                className="text-blue-600 font-semibold"

                            >

                                GitHub

                            </a>

                            <a

                                href={portfolio.user.linkedin}

                                target="_blank"

                                rel="noreferrer"

                                className="text-blue-600 font-semibold"

                            >

                                LinkedIn

                            </a>

                        </div>

                    </div>

                </div>

                {/* Skills */}

                <div className="mt-10">

                    <h2 className="text-3xl font-bold mb-5">

                        Skills

                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {

                            portfolio.user.skills.map(

                                (skill, index) => (

                                    <SkillBadge

                                        key={index}

                                        skill={skill}

                                    />

                                )

                            )

                        }

                    </div>

                </div>

                {/* Projects */}

                <div className="mt-12">

                    <h2 className="text-3xl font-bold mb-6">

                        Projects

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {

                            portfolio.projects.map(

                                (project) => (

                                    <ProjectCard

                                        key={project._id}

                                        project={project}

                                    />

                                )

                            )

                        }

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Portfolio;