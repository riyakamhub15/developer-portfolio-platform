function ProfileImage({ profile }) {

    return (

        <div className="flex flex-col items-center">

            <img
                src={
                    profile?.profilePic ||
                    "https://ui-avatars.com/api/?name=" +
                    encodeURIComponent(profile?.name || "User") +
                    "&background=2563eb&color=fff&size=200"
                }
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-blue-600 object-cover shadow-lg"
            />

        </div>

    );

}

export default ProfileImage;