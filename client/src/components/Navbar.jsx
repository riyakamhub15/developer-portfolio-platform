import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="bg-white shadow-md sticky top-0 z-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">

                    <Link
                        to="/"
                        className="text-xl md:text-2xl font-bold text-blue-600"
                    >
                        DevFolio
                    </Link>

                    {/* Desktop Menu */}

                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            to="/"
                            className="hover:text-blue-600 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/dashboard"
                            className="hover:text-blue-600 transition"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/login"
                            className="hover:text-blue-600 transition"
                        >
                            Login
                        </Link>

                        <Link to="/register">

                            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">

                                Register

                            </button>

                        </Link>

                    </div>

                    {/* Mobile Button */}

                    <button
                        className="md:hidden text-3xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (

                    <div className="md:hidden flex flex-col gap-4 py-5 border-t">

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/dashboard"
                            onClick={() => setMenuOpen(false)}
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            onClick={() => setMenuOpen(false)}
                        >

                            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">

                                Register

                            </button>

                        </Link>

                    </div>

                )}

            </div>

        </nav>

    );

}

export default Navbar;