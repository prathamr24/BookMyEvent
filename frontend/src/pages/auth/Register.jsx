import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../api/authApi";

function Register() {

    const navigate =
        useNavigate();

    const [formData, setFormData] =
        useState({
            name: "",
            email: "",
            password: "",
            phone: ""
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

            await registerUser(
                formData
            );

            navigate("/login");

        } catch (error) {

            alert(
                "Registration failed"
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
                    Register
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
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

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
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
                    Register
                </button>

            </form>

        </div>
    );
}

export default Register;