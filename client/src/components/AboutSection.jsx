function AboutSection({

    bio

}) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                About Me

            </h2>

            <p className="text-gray-600">

                {bio || "No Bio Added"}

            </p>

        </div>

    );

}

export default AboutSection;