import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/common/Navbar";
import HeroBanner from "../../components/movie/HeroBanner";
import MovieCard from "../../components/movie/MovieCard";
import Footer from "../../components/common/Footer";

import { getMovies } from "../../api/movieApi";

function Home() {

    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        loadMovies();

    }, []);

    const loadMovies = async () => {

        try {

            const data =
                await getMovies();

            setMovies(data);

        } catch (error) {

            console.error(
                "Failed to load movies",
                error
            );
        }
    };

    return (

        <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1">

                <HeroBanner />

                <section
                    className="
                    max-w-7xl
                    mx-auto
                    mt-10
                    px-4
                    "
                >

                    <h2
                        className="
                        text-2xl
                        font-bold
                        mb-6
                        "
                    >
                        Trending Movies
                    </h2>

                    <div
                        className="
                        grid
                        grid-cols-2
                        md:grid-cols-3
                        lg:grid-cols-4
                        gap-6
                        "
                    >

                        {
                            movies.map(
                                movie => (

                                    <MovieCard
                                        key={movie.id}
                                        movie={movie}
                                        onClick={(id) =>
                                            navigate(
                                                `/movies/${id}`
                                            )
                                        }
                                    />

                                )
                            )
                        }

                    </div>

                </section>

            </main>

            <Footer />

        </div>

    );
}

export default Home;

