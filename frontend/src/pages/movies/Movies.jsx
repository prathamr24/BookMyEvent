import {
    useEffect,
    useState
} from "react";

import {
    useNavigate
} from "react-router-dom";

import MovieCard
from "../../components/movie/MovieCard";

import {
    getMovies
}
from "../../api/movieApi";

function Movies() {

    const navigate =
        useNavigate();

    const [movies,
        setMovies] =
        useState([]);

    useEffect(() => {

        loadMovies();

    }, []);

    const loadMovies =
        async () => {

            try {

                const data =
                    await getMovies();

                setMovies(data);

            } catch (error) {

                console.error(error);
            }
        };

    return (

        <div
            className="
            max-w-7xl
            mx-auto
            px-4
            py-8
            "
        >

            <h1
                className="
                text-3xl
                font-bold
                mb-8
                "
            >
                Movies
            </h1>

            <div
                className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-5
                gap-6
                "
            >

                {
                    movies.map(
                        movie => (

                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClick={
                                    (id) =>
                                        navigate(
                                            `/movies/${id}`
                                        )
                                }
                            />

                        )
                    )
                }

            </div>

        </div>
    );
}

export default Movies;