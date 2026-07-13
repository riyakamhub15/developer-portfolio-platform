function SocialCard({ title, value }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-5">

            <h3 className="font-bold text-gray-600">

                {title}

            </h3>

            <p className="mt-2 break-words">

                {value || "Not Added"}

            </p>

        </div>

    );

}

export default SocialCard;