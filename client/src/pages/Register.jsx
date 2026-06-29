import { useState } from "react";

import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/AuthLayout";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import Button from "../components/Button";

import { registerUser } from "../services/authService";
import { Link } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",

        username: "",

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

            await registerUser(formData);

            alert("Registration Successful");

            navigate("/login");

        }

        catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <AuthLayout>

            <AuthCard title="Create Account">

                <form onSubmit={handleSubmit}>

                    <Input
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <Input
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

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

                        Register

                    </Button>

                    <p className="text-center mt-5">

    Already have an account?

    <Link
        to="/login"
        className="text-blue-600 ml-2 font-semibold"
    >

        Login

    </Link>

</p>

                </form>

            </AuthCard>

        </AuthLayout>

    );

}

export default Register;