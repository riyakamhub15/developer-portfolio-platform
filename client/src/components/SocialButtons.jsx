function SocialButtons({ profile }) {

    return (

        <div className="flex justify-center gap-4 mt-8">

            {

                profile?.github && (

                    <a

                        href={profile.github}

                        target="_blank"

                        rel="noreferrer"

                        className="bg-gray-900 text-white px-6 py-3 rounded-lg"

                    >

                        GitHub

                    </a>

                )

            }

            {

                profile?.linkedin && (

                    <a

                        href={profile.linkedin}

                        target="_blank"

                        rel="noreferrer"

                        className="bg-blue-700 text-white px-6 py-3 rounded-lg"

                    >

                        LinkedIn

                    </a>

                )

            }

        </div>

    );

}

export default SocialButtons;