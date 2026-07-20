function HeroSection({ profile }) {

    return (

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl px-6 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 text-center">

            <img
                src={
                    profile?.profilePic ||
                    "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(profile?.name || "User")
                }
                alt="Profile"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto border-4 border-white object-cover shadow-lg"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 break-words">
                {profile?.name}
            </h1>

            <p className="text-lg sm:text-xl mt-3 text-blue-100">
                Full Stack MERN Developer
            </p>

            <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 text-blue-50">
                {profile?.bio || "No bio added yet."}
            </p>

        </div>

    );

}

export default HeroSection;