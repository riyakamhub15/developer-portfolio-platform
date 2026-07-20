function ProfileImage({ profile }) {

    const initials =
        profile?.name
            ?.split(" ")
            .map(word => word[0])
            .join("")
            .toUpperCase() || "U";

    return (

        <div className="flex flex-col items-center">

            <div className="w-40 h-40 rounded-full bg-blue-600 border-4 border-blue-600 shadow-lg flex items-center justify-center text-white text-5xl font-bold">

                {initials}

            </div>

        </div>

    );

}

export default ProfileImage;