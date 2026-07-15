function DashboardHeader({ name }) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-6">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">

                Welcome Back{ name ? `, ${name}` : "" } 👋

            </h1>

            <p className="text-gray-500 mt-3 text-sm sm:text-base">

                Manage your portfolio, projects and profile from one place.

            </p>

        </div>

    );

}

export default DashboardHeader;