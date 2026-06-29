function FeatureCard({

    title,

    description,

    emoji

}) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300">

            <div className="text-5xl">

                {emoji}

            </div>

            <h2 className="text-2xl font-bold mt-5">

                {title}

            </h2>

            <p className="text-gray-600 mt-4">

                {description}

            </p>

        </div>

    );

}

export default FeatureCard;