import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    useAuth
} from "../../context/AuthContext";

function Navbar() {

    const {
        isAuthenticated,
        logout
    } = useAuth();

    const navigate =
        useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");
    };

    

    return (

        <nav
            className="
            bg-white
            border-b
            border-gray-200
            "
        >

            <div
                className="
                max-w-7xl
                mx-auto
                px-6
                py-4
                flex
                justify-between
                items-center
                "
            >

                <Link
                    to="/"
                    className="
                    text-2xl
                    font-bold
                    text-red-600
                    "
                >
                    BookMyEvent
                </Link>

                <div
                    className="
                    flex
                    gap-6
                    "
                >

                    <Link to="/">
                        Movies
                    </Link>

                    <Link to="/">
                        Events
                    </Link>

                    <Link to="/">
                        Sports
                    </Link>

                </div>

                {
                    isAuthenticated ? (

                        <button
                            onClick={
                                handleLogout
                            }
                            className="
                            bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            "
                        >
                            Logout
                        </button>

                    ) : (

                        <Link
                            to="/login"
                            className="
                            bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            "
                        >
                            Login
                        </Link>

                    )
                }

            </div>

        </nav>
    );
}

export default Navbar;