function HeroSection({ profile }) {

    return (

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-12 text-center">

            <img

                src={
                    profile?.profilePic ||
                    "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(profile?.name || "User")
                }

                alt="Profile"

                className="w-36 h-36 rounded-full mx-auto border-4 border-white object-cover"

            />

            <h1 className="text-5xl font-bold mt-6">

                {profile?.name}

            </h1>

            <p className="text-xl mt-3">

                Full Stack MERN Developer

            </p>

            <p className="mt-6 max-w-2xl mx-auto">

                {profile?.bio}

            </p>

        </div>

    );

}

export default HeroSection;