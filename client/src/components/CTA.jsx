import Button from "./Button";

function CTA() {

    return (

        <section className="bg-blue-600 py-16 md:py-24 text-center text-white">

            <div className="max-w-4xl mx-auto px-4 sm:px-6">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">

                    Ready to Build Your Portfolio?

                </h2>

                <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">

                    Join thousands of developers already showcasing their work.

                </p>

                <div className="mt-8 flex justify-center">

                    <Button>

                        Create Portfolio

                    </Button>

                </div>

            </div>

        </section>

    );

}

export default CTA;