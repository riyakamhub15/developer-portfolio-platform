import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import RecentProjects from "../components/RecentProjects";
import SocialButtons from "../components/SocialButtons";

import { getPortfolio } from "../services/publicService";

function PublicPortfolio() {

    const { username } = useParams();

    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {

        fetchPortfolio();

    }, []);

    const fetchPortfolio = async () => {

        try {

            const res = await getPortfolio(username);

            setPortfolio(res.data);

        }

        catch (error) {

            console.log(error);

        }

    };

    if (!portfolio) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <h1 className="text-3xl font-bold">

                    Loading Portfolio...

                </h1>

            </div>

        );

    }

    return (

        <div className="bg-gray-100 min-h-screen">

            <div className="max-w-6xl mx-auto py-10 px-5">

                <HeroSection

                    profile={portfolio.user}

                />

                <SocialButtons

                    profile={portfolio.user}

                />

                <div className="mt-10">

                    <SkillsSection

                        skills={portfolio.user.skills}

                    />

                </div>

                <div className="mt-10">

                    <RecentProjects

                        projects={portfolio.projects}

                    />

                </div>

            </div>

        </div>

    );

}

export default PublicPortfolio;