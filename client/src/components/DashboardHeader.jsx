function DashboardHeader({ name }) {

    return (

        <div className="bg-white shadow-sm p-6">

            <h1 className="text-4xl font-bold">

                Welcome Back {name} 

            </h1>

            <p className="text-gray-500 mt-2">

                Manage your portfolio from one place.

            </p>

        </div>

    );

}

export default DashboardHeader;