import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Sidebar({ closeSidebar }) {

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

        <div className="w-64 h-screen bg-slate-900 text-white flex flex-col shadow-xl">

            {/* Logo */}

            <div className="p-6 border-b border-slate-700 flex justify-between items-center">

                <h1 className="text-3xl font-bold">

                    DevFolio

                </h1>

                {/* Mobile Close Button */}

                <button

                    className="lg:hidden text-3xl"

                    onClick={closeSidebar}

                >

                    ✕

                </button>

            </div>

            {/* User */}

            {

                user && (

                    <div className="px-6 py-5 border-b border-slate-700">

                        <p className="font-semibold text-lg">

                            {user.name}

                        </p>

                        <p className="text-gray-400">

                            @{user.username}

                        </p>

                    </div>

                )

            }

            {/* Menu */}

            <div className="flex-1 p-4">

                {

                    menu.map((item) => (

                        <Link

                            key={item.title}

                            to={item.path}

                            onClick={closeSidebar}

                            className={`block px-4 py-3 rounded-lg mb-3 transition-all duration-200 ${
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

            {/* Logout */}

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