import Button from "./Button";

function Hero() {

    return (

        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24 lg:py-28">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">

                    Build Your Developer Portfolio

                </h1>

                <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-blue-100 leading-8">

                    Create a stunning portfolio website, showcase your projects,
                    and share your work with recruiters in minutes.

                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

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