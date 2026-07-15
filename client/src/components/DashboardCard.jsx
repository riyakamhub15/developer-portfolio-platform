function DashboardCard({

    title,

    value

}) {

    return (

        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6">

            <p className="text-gray-500 text-sm uppercase tracking-wide">

                {title}

            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-3">

                {value}

            </h2>

        </div>

    );

}

export default DashboardCard;