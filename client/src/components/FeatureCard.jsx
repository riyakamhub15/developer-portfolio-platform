function FeatureCard({

    title,

    description,

    emoji

}) {

    return (

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 text-center h-full">

            <div className="text-5xl sm:text-6xl">

                {emoji}

            </div>

            <h2 className="text-xl sm:text-2xl font-bold mt-5">

                {title}

            </h2>

            <p className="text-gray-600 mt-4 leading-7">

                {description}

            </p>

        </div>

    );

}

export default FeatureCard;