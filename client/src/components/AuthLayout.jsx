function AuthLayout({ children }) {

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-gray-100 to-indigo-100 flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-md">

                {children}

            </div>

        </div>

    );

}

export default AuthLayout;