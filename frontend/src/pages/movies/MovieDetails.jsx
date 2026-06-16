import {
    useEffect,
    useState
} from "react";

import {
    useParams,
    useNavigate
} from "react-router-dom";

import {
    getMovieById
}
from "../../api/movieApi";

function MovieDetails() {

    const { movieId } =
        useParams();

    const navigate =
        useNavigate();

    const [movie,
        setMovie] =
        useState(null);

    const loadMovie =
        async () => {

            try {

                const data =
                    await getMovieById(
                        movieId
                    );

                setMovie(data);

            } catch (error) {

                console.error(error);
            }
        };

    useEffect(() => {

        loadMovie();

    }, []);

    if (!movie) {

        return (
            <h1>
                Loading...
            </h1>
        );
    }

    

  return (
    <>
        <div className="relative h-[550px]">

            <img
                src={
                    movie.backdropUrl ||
                    movie.posterUrl
                }
                alt={movie.title}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                "
            />

            <div
                className="
                    absolute
                    inset-0
                    bg-black/70
                "
            />

            <div
                className="
                    relative
                    max-w-7xl
                    mx-auto
                    h-full
                    flex
                    items-center
                    gap-10
                    px-6
                "
            >

                <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    className="
                        w-72
                        rounded-2xl
                        shadow-2xl
                    "
                />

                <div className="text-white">

                    <h1
                        className="
                            text-5xl
                            font-bold
                            mb-4
                        "
                    >
                        {movie.title}
                    </h1>

                    <div
                        className="
                            inline-flex
                            items-center
                            px-4
                            py-2
                            rounded-xl
                            bg-white/10
                            backdrop-blur
                            mb-4
                        "
                    >
                        ⭐ {movie.rating || "N/A"}/10
                    </div>

                    <p className="mb-2">
                        {
                            movie.genres?.join(" • ")
                        }
                    </p>

                    <p className="mb-2">
                        {
                            movie.languages?.join(" • ")
                        }
                    </p>

                    <p className="mb-4">
                        {movie.durationMinutes} mins
                        {" • "}
                        {movie.certificate}
                    </p>

                    <div
                        className="
                            flex
                            gap-4
                            mt-6
                        "
                    >

                        <button
                            onClick={() =>
                                navigate(
                                    `/movies/${movie.id}/shows`
                                )
                            }
                            className="
                                bg-red-600
                                px-6
                                py-3
                                rounded-lg
                                font-semibold
                            "
                        >
                            Book Tickets
                        </button>

                        {
                            movie.trailerUrl &&
                            (
                                <button
                                    onClick={() =>
                                        window.open(
                                            movie.trailerUrl,
                                            "_blank"
                                        )
                                    }
                                    className="
                                        border
                                        border-white
                                        px-6
                                        py-3
                                        rounded-lg
                                    "
                                >
                                    Watch Trailer
                                </button>
                            )
                        }

                    </div>

                </div>

            </div>

        </div>

        <div
            className="
                max-w-7xl
                mx-auto
                px-6
                py-12
            "
        >

            <h2
                className="
                    text-3xl
                    font-bold
                    mb-4
                "
            >
                About The Movie
            </h2>

            <p
                className="
                    text-gray-700
                    leading-8
                "
            >
                {movie.description}
            </p>

        </div>
    </>
);
}

export default MovieDetails;