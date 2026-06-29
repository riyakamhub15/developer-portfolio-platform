import { Link } from "react-router-dom";

function Navbar() {

    return (

        <nav className="bg-white shadow-md">

            <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

                <h1 className="text-2xl font-bold text-blue-600">

                    DevFolio

                </h1>

                <div className="flex items-center gap-6">

                    <Link to="/">Home</Link>

                    <Link to="/dashboard">Dashboard</Link>

                    <Link to="/login">Login</Link>

                    <Link to="/register">

                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">

                            Register

                        </button>

                    </Link>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;