function Stats() {

    const stats = [

        {
            number: "100+",
            label: "Developers"
        },

        {
            number: "500+",
            label: "Projects"
        },

        {
            number: "99%",
            label: "Uptime"
        }

    ];

    return (

        <section className="py-12 md:py-16 bg-gray-100">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">

                    {

                        stats.map((item, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
                            >

                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">

                                    {item.number}

                                </h2>

                                <p className="text-gray-600 mt-2 text-sm sm:text-base">

                                    {item.label}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Stats;