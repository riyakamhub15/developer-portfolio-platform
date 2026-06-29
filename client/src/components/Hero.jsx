import Button from "./Button";

function Hero() {

    return (

        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h1 className="text-6xl font-bold leading-tight">

                    Build Your Developer Portfolio

                </h1>

                <p className="mt-6 text-xl text-blue-100">

                    Create a stunning portfolio website, showcase your projects,
                    and share your work with recruiters in minutes.

                </p>

                <div className="mt-10 flex justify-center gap-5">

                    <Button>

                        Get Started

                    </Button>

                    <Button variant="secondary">

                        Explore

                    </Button>

                </div>

            </div>

        </section>

    );

}

export default Hero;