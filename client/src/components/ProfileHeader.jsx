import ProfileImage from "./ProfileImage";

function ProfileHeader({ profile }) {

    return (

       <div className="bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col items-center text-center">

            <ProfileImage profile={profile} />

            <h1 className="text-3xl md:text-4xl font-bold mt-6 break-words">

                {profile?.name}

            </h1>

            <p className="text-gray-600 mt-3 max-w-2xl">

                {profile?.bio || "No bio added yet"}

            </p>

        </div>

    ); 

}

export default ProfileHeader;