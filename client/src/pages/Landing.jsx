import MainLayout from "../layouts/MainLayout";

import Hero from "../components/Hero";

import Stats from "../components/Stats";

import FeatureCard from "../components/FeatureCard";

import CTA from "../components/CTA";

function Landing() {

    return (

        <MainLayout>

            <Hero />

            <Stats />

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-16">

                        Features

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <FeatureCard

                            emoji="👤"

                            title="Profile"

                            description="Create your professional developer profile."

                        />

                        <FeatureCard

                            emoji="💻"

                            title="Projects"

                            description="Showcase your best projects."

                        />

                        <FeatureCard

                            emoji="📄"

                            title="Resume"

                            description="Upload and share your resume."

                        />

                    </div>

                </div>

            </section>

            <CTA />

        </MainLayout>

    );

}

export default Landing;