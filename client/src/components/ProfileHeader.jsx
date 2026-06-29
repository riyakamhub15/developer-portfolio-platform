function ProfileHeader({ profile }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-8">

            <div className="flex flex-col items-center">

                <img
                    src={
                        profile?.profilePic ||
                        "https://via.placeholder.com/150"
                    }
                    alt="Profile"
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                />

                <h1 className="text-4xl font-bold mt-5">

                    {profile?.name}

                </h1>

                <p className="text-gray-500 mt-2">

                    {profile?.bio || "No Bio Added"}

                </p>

            </div>

        </div>

    );

}

export default ProfileHeader;