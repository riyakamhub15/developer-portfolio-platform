import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import Loader from "../components/Loader";

function ProtectedRoute({ children }) {

    const {

        loading,

        isAuthenticated

    } = useAuth();

    if (loading) {

        return <Loader />;

    }

    if (!isAuthenticated) {

        return <Navigate to="/login" />;

    }

    return children;

}

export default ProtectedRoute;