function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">

            <div className="w-full max-w-md">

                {children}

            </div>

        </div>
    );
}

export default AuthLayout;