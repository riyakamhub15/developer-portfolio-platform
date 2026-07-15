function SocialCard({ title, value }) {

    return (

        <div className="bg-white rounded-xl shadow-md p-5">

            <h3 className="font-semibold text-gray-500 text-sm uppercase">

                {title}

            </h3>

            <p className="mt-2 break-all text-gray-800">

                {value || "Not Added"}

            </p>

        </div>

    );

}

export default SocialCard;