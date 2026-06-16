import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../api/authApi";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate =
        useNavigate();

    const { login } =
        useAuth();

    const [formData, setFormData] =
        useState({
            email: "",
            password: ""
        });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response =
                await loginUser(
                    formData
                );

            login(
                response.token
            );

            navigate("/");

        } catch (error) {

            alert(
                "Invalid credentials"
            );
        }
    };

    return (

        <div
            className="
            min-h-screen
            flex
            items-center
            justify-center
            bg-slate-50
            "
        >

            <form
                onSubmit={handleSubmit}
                className="
                bg-white
                p-8
                rounded-xl
                shadow-md
                w-full
                max-w-md
                "
            >

                <h2
                    className="
                    text-2xl
                    font-bold
                    mb-6
                    "
                >
                    Login
                </h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    p-3
                    rounded-lg
                    mb-4
                    "
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="
                    w-full
                    border
                    p-3
                    rounded-lg
                    mb-4
                    "
                />

                <button
                    className="
                    w-full
                    bg-red-600
                    text-white
                    p-3
                    rounded-lg
                    "
                >
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;