function AboutSection({ bio }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-4">

                About Me

            </h2>

            <p>

                {bio || "No bio available"}

            </p>

        </div>

    );

}

export default AboutSection;