function HeroBanner() {

    return (

        <section
            className="
            max-w-7xl
            mx-auto
            mt-8
            rounded-3xl
            border
            border-red-200
            bg-red-50
            overflow-hidden
            "
        >

            <div
                className="
                p-8
                md:p-10
                "
            >

                <h1
                    className="
                    text-4xl
                    font-bold
                    text-gray-900
                    "
                >
                    Avengers Endgame
                </h1>

                <p
                    className="
                    mt-3
                    text-gray-600
                    text-lg
                    "
                >
                    Experience the biggest movie
                    event of all time.
                </p>

                <button
                    className="
                    mt-6
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    transition
                    "
                >
                    Book Tickets
                </button>

            </div>

        </section>

    );
}

export default HeroBanner;