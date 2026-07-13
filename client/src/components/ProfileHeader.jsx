import ProfileImage from "./ProfileImage";

function ProfileHeader({ profile }) {

    return (

        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">

            <ProfileImage profile={profile} />

            <h1 className="text-4xl font-bold mt-6">

                {profile?.name}

            </h1>

            <p className="text-gray-600 mt-2">

                {profile?.bio || "No bio added yet"}

            </p>

        </div>

    );

}

export default ProfileHeader;