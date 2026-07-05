import { createContext, useEffect, useState } from "react";
import { getProfile } from "../services/userService";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {

        fetchUser();

    }

    else {

        setLoading(false);

    }

}, []);

    const fetchUser = async () => {

    console.log("Fetching User...");

    try {

        const response = await getProfile();

        console.log(response.data);

        setUser(response.data);

    }

    catch(error){

        console.log(error);

        localStorage.removeItem("token");

    }

    finally{

        setLoading(false);

    }

};

    const login = (token) => {

        localStorage.setItem("token", token);

        fetchUser();

    };

    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

    };

    return (

        <AuthContext.Provider

            value={{

                user,

                login,

                logout,

                loading,

                isAuthenticated: !!user

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export default AuthProvider;