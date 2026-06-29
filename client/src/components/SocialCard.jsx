function SocialCard({

    title,

    value

}) {

    return (

        <div className="bg-white shadow rounded-lg p-5">

            <h2 className="font-bold">

                {title}

            </h2>

            <p className="text-blue-600 break-all mt-2">

                {value || "Not Added"}

            </p>

        </div>

    );

}

export default SocialCard;