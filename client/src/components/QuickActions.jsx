import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function QuickActions() {

    const navigate = useNavigate();

    const { user } = useAuth();

    return (

        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

            <h2 className="text-xl md:text-2xl font-bold mb-6">

                Quick Actions

            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <button

                    onClick={() => navigate("/projects")}

                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-4 font-semibold transition"

                >

                    📁 Projects

                </button>

                <button

                    onClick={() => navigate("/profile")}

                    className="bg-gray-200 hover:bg-gray-300 rounded-xl py-4 font-semibold transition"

                >

                    👤 Profile

                </button>

                <button

                    onClick={() => navigate(`/portfolio/${user?.username}`)}

                    className="bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 font-semibold transition"

                >

                    🌐 Portfolio

                </button>

            </div>

        </div>

    );

}

export default QuickActions;