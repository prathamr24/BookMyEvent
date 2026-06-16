function MovieCard({
    movie,
    onClick
}) {
     
     if (!movie) {
        return null;
    }
    else
    return (

        <div
            onClick={() =>
                onClick(movie.id)
            }
            className="
            cursor-pointer
            bg-white
            border
            border-gray-200
            rounded-xl
            overflow-hidden
            shadow-sm
            hover:shadow-lg
            transition
            "
        >

            <img
                src={movie.posterUrl}
                alt={movie.title}
                className="
                w-full
                h-72
                object-cover
                "
            />

            <div className="p-4">

                <h3
                    className="
                    font-semibold
                    text-lg
                    "
                >
                    {movie.title}
                </h3>

                <p
                    className="
                    text-sm
                    text-gray-500
                    "
                >
                    {
                        [...movie.genres]
                            .join(", ")
                    }
                </p>

            </div>

        </div>

    );
}

export default MovieCard;
