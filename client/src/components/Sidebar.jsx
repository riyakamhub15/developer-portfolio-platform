import { Link } from "react-router-dom";

function Sidebar() {

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
            title: "Portfolio",
            path: "/portfolio/riya"
        },

        {
            title: "Settings",
            path: "/settings"
        }

    ];

    return (

        <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

            <h1 className="text-3xl font-bold mb-10">

                DevFolio

            </h1>

            {

                menu.map((item,index)=>(

                    <Link

                        key={index}

                        to={item.path}

                        className="block py-3 px-4 rounded-lg hover:bg-slate-700 mb-2"

                    >

                        {item.title}

                    </Link>

                ))

            }

        </div>

    );

}

export default Sidebar;