import { useState } from "react";
import Sidebar from "../components/Sidebar";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="flex min-h-screen bg-gray-100">

            {/* Mobile Overlay */}

            {sidebarOpen && (

                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />

            )}

            {/* Sidebar */}

            <div
                className={`
                    fixed lg:static
                    top-0 left-0
                    h-screen
                    z-50
                    transform
                    transition-transform
                    duration-300
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                `}
            >

                <Sidebar
                    closeSidebar={() => setSidebarOpen(false)}
                />

            </div>

            {/* Main Content */}

            <div className="flex-1 min-h-screen">

                {/* Mobile Header */}

                <div className="lg:hidden bg-white shadow px-4 py-4 flex items-center">

                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-3xl"
                    >
                        ☰
                    </button>

                    <h1 className="ml-4 text-xl font-bold">

                        Portfolio Platform

                    </h1>

                </div>

                <div className="p-4 md:p-6 lg:p-8">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;