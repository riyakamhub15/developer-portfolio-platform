function AuthCard({ title, children }) {

    return (

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">

            <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">

                {title}

            </h1>

            {children}

        </div>

    );

}

export default AuthCard;