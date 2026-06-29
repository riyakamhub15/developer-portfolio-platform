import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginUser(formData);

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        }

        catch (error) {

            alert(
                error.response?.data?.message ||
                "Login Failed"
            );

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

                        value={formData.email}

                        onChange={handleChange}

                    />

                    <Input

                        label="Password"

                        type="password"

                        name="password"

                        value={formData.password}

                        onChange={handleChange}

                    />

                    <Button type="submit">

                        Login

                    </Button>

                    <p className="text-center mt-5">

    Don't have an account?

    <Link
        to="/register"
        className="text-blue-600 ml-2 font-semibold"
    >

        Register

    </Link>

</p>

                </form>

            </AuthCard>

        </AuthLayout>

    );

}

export default Login;