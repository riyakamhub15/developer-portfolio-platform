function AuthCard({ title, children }) {

    return (

        <div className="bg-white rounded-xl shadow-xl p-8">

            <h1 className="text-3xl font-bold text-center mb-8">

                {title}

            </h1>

            {children}

        </div>

    );

}

export default AuthCard;