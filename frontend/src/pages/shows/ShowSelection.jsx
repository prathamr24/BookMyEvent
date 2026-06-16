import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getMovieById
} from "../../api/movieApi";

import {
    getShowsByMovieId
} from "../../api/ShowsApi";

import TheaterCard
from "../../components/shows/TheaterCard";

function ShowSelection() {

    const { movieId } =
        useParams();

    const navigate =
        useNavigate();

    const [movie,
        setMovie] =
        useState(null);

    const [shows,
        setShows] =
        useState([]);

    const [selectedDate,
        setSelectedDate] =
        useState(0);

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

    const loadShows =
        async () => {

            try {

                const data =
                    await getShowsByMovieId(
                        movieId
                    );

                setShows(data);

            } catch (error) {

                console.error(error);
            }
        };

    useEffect(() => {

        loadMovie();
        loadShows();

    }, []);

    const dates =
        Array.from(
            { length: 7 },
            (_, index) => {

                const date =
                    new Date();

                date.setDate(
                    date.getDate() + index
                );

                return date;
            }
        );

    const groupedShows =
        shows.reduce(
            (acc, show) => {

                const key =
                    show.theaterName;

                if (!acc[key]) {

                    acc[key] = [];
                }

                acc[key].push(show);

                return acc;

            },
            {}
        );

    return (

        <div
            className="
            min-h-screen
            bg-slate-50
            "
        >

            <div
                className="
                max-w-7xl
                mx-auto
                px-4
                py-6
                "
            >

                {movie && (

                    <div
                        className="
                        relative
                        rounded-2xl
                        overflow-hidden
                        mb-8
                        shadow-lg
                        "
                    >

                        <img
                            src={
                                movie.backdropUrl
                                    || movie.posterUrl
                            }
                            alt={
                                movie.title
                            }
                            className="
                            w-full
                            h-80
                            object-cover
                            "
                        />

                        <div
                            className="
                            absolute
                            inset-0
                            bg-black/60
                            "
                        />

                        <div
                            className="
                            absolute
                            inset-0
                            flex
                            items-center
                            px-8
                            "
                        >

                            <div
                                className="
                                text-white
                                "
                            >

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
                                    flex
                                    flex-wrap
                                    gap-3
                                    "
                                >

                                    <span
                                        className="
                                        bg-white/20
                                        px-3
                                        py-1
                                        rounded-full
                                        "
                                    >
                                        ⭐ {movie.rating || "N/A"}
                                    </span>

                                    <span
                                        className="
                                        bg-white/20
                                        px-3
                                        py-1
                                        rounded-full
                                        "
                                    >
                                        {movie.durationMinutes} mins
                                    </span>

                                    <span
                                        className="
                                        bg-white/20
                                        px-3
                                        py-1
                                        rounded-full
                                        "
                                    >
                                        {movie.certificate}
                                    </span>

                                </div>

                                <div
                                    className="
                                    mt-4
                                    flex
                                    flex-wrap
                                    gap-2
                                    "
                                >

                                    {
                                        movie.genres?.map(
                                            genre => (

                                                <span
                                                    key={genre}
                                                    className="
                                                    bg-white/10
                                                    px-3
                                                    py-1
                                                    rounded-full
                                                    text-sm
                                                    "
                                                >
                                                    {genre}
                                                </span>

                                            )
                                        )
                                    }

                                </div>

                            </div>

                        </div>

                    </div>

                )}

                <div
                    className="
                    sticky
                    top-0
                    z-10
                    bg-white
                    rounded-xl
                    shadow-sm
                    p-4
                    mb-6
                    "
                >

                    <div
                        className="
                        flex
                        gap-3
                        overflow-x-auto
                        "
                    >

                        {
                            dates.map(
                                (
                                    date,
                                    index
                                ) => (

                                    <button
                                        key={index}
                                        onClick={() =>
                                            setSelectedDate(
                                                index
                                            )
                                        }
                                        className={`
                                            min-w-[80px]
                                            rounded-xl
                                            p-3
                                            text-center
                                            transition
                                            ${
                                                selectedDate === index
                                                    ? "bg-red-500 text-white"
                                                    : "bg-slate-100 hover:bg-slate-200"
                                            }
                                        `}
                                    >

                                        <div
                                            className="
                                            text-xs
                                            "
                                        >
                                            {
                                                date.toLocaleDateString(
                                                    "en-US",
                                                    {
                                                        weekday: "short"
                                                    }
                                                )
                                            }
                                        </div>

                                        <div
                                            className="
                                            text-2xl
                                            font-bold
                                            "
                                        >
                                            {
                                                date.getDate()
                                            }
                                        </div>

                                    </button>

                                )
                            )
                        }

                    </div>

                </div>

                <div
                    className="
                    flex
                    gap-6
                    mb-6
                    text-sm
                    "
                >

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <div
                            className="
                            w-3
                            h-3
                            rounded-full
                            bg-green-500
                            "
                        />

                        Available

                    </div>

                    <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                    >

                        <div
                            className="
                            w-3
                            h-3
                            rounded-full
                            bg-yellow-500
                            "
                        />

                        Fast Filling

                    </div>

                </div>

                {
                    Object.entries(
                        groupedShows
                    ).map(
                        (
                            [
                                theater,
                                theaterShows
                            ]
                        ) => (

                            <TheaterCard
                                key={theater}
                                theaterName={
                                    theater
                                }
                                screenName={
                                    theaterShows[0]
                                        .screenName
                                }
                                shows={
                                    theaterShows
                                }
                                onShowSelect={
                                    (show) =>
                                        navigate(
                                            `/shows/${show.id}/seats`
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

export default ShowSelection;