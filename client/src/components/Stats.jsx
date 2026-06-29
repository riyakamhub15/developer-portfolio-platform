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

        <section className="py-16 bg-gray-100">

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {

                    stats.map((item, index) => (

                        <div
                            key={index}
                            className="text-center"
                        >

                            <h2 className="text-5xl font-bold text-blue-600">

                                {item.number}

                            </h2>

                            <p className="text-gray-600 mt-2">

                                {item.label}

                            </p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Stats;