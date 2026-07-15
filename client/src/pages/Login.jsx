import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";

import { loginUser } from "../services/authService";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

          const response = await loginUser(formData);

console.log("API Response:", response.data);

console.log("Token:", response.data.token);

await login(response.data.token);
toast.success("Login Successful!");
console.log("LocalStorage Token:", localStorage.getItem("token"));

navigate("/dashboard");

        }

        catch (error) {

          toast.error(
    error.response?.data?.message ||
    "Login Failed"
);

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <AuthLayout>

            <AuthCard title="Welcome Back">

                <form onSubmit={handleSubmit}>

                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className="mt-6">

                        <Button type="submit">

                            {loading ? "Logging in..." : "Login"}

                        </Button>

                    </div>

                </form>

                <p className="text-center mt-6">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 ml-2 font-semibold hover:underline"
                    >

                        Register

                    </Link>

                </p>

            </AuthCard>

        </AuthLayout>

    );

}

export default Login;