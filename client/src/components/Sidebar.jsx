import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Sidebar() {

    const location = useLocation();

    const { user, logout } = useAuth();

    const menu = [

        {
            title: "Dashboard",
            path: "/dashboard"
        },

        {
            title: "Profile",
            path: "/profile"
        },

        {
            title: "Projects",
            path: "/projects"
        },

        {
            title: "My Portfolio",
            path: user
                ? `/portfolio/${user.username}`
                : "/dashboard"
        }

    ];

    const handleLogout = () => {

        logout();

        window.location.href = "/login";

    };

    return (

        <div className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

            <div className="p-6 border-b border-slate-700">

                <h1 className="text-3xl font-bold">

                    DevFolio

                </h1>

                {

                    user && (

                        <div className="mt-5">

                            <p className="font-semibold">

                                {user.name}

                            </p>

                            <p className="text-sm text-gray-300">

                                @{user.username}

                            </p>

                        </div>

                    )

                }

            </div>

            <div className="flex-1 p-4">

                {

                    menu.map((item) => (

                        <Link

                            key={item.title}

                            to={item.path}

                            className={`block px-4 py-3 rounded-lg mb-2 transition duration-200 ${
                                location.pathname === item.path
                                    ? "bg-blue-600"
                                    : "hover:bg-slate-700"
                            }`}

                        >

                            {item.title}

                        </Link>

                    ))

                }

            </div>

            <div className="p-4 border-t border-slate-700">

                <button

                    onClick={handleLogout}

                    className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg transition"

                >

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;