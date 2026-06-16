import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Movies from "./pages/movies/Movies";
import MovieDetails from "./pages/movies/MovieDetails";
import ShowSelection from "./pages/shows/ShowSelection";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                      path="/movies"
                      element={<Movies />}
                />

                <Route
                    path="/movies/:movieId"
                    element={<MovieDetails />}
                />

                <Route
                    path="/movies/:movieId/shows"
                    element={ <ShowSelection /> }
                />


            </Routes>

        </BrowserRouter>
    );
}

export default App;