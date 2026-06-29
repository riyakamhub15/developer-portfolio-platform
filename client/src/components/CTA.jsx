import Button from "./Button";

function CTA() {

    return (

        <section className="bg-blue-600 py-24 text-center text-white">

            <h2 className="text-4xl font-bold">

                Ready to Build Your Portfolio?

            </h2>

            <p className="mt-5 text-lg">

                Join thousands of developers already showcasing their work.

            </p>

            <div className="mt-8">

                <Button>

                    Create Portfolio

                </Button>

            </div>

        </section>

    );

}

export default CTA;