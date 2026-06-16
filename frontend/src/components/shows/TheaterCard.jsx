import ShowTimeButton
from "./ShowTimeButton";

function TheaterCard({
    theaterName,
    screenName,
    shows,
    onShowSelect
}) {

    return (

        <div
            className="
            bg-white
            border
            rounded-xl
            p-5
            mb-5
            "
        >

            <h3
                className="
                text-xl
                font-semibold
                "
            >
                {theaterName}
            </h3>

            <p
                className="
                text-gray-500
                mb-4
                "
            >
                {screenName}
            </p>

            <div
                className="
                flex
                flex-wrap
                gap-3
                "
            >

                {
                    shows.map(show => (

                        <ShowTimeButton
                            key={show.id}
                            show={show}
                            onSelect={
                                onShowSelect
                            }
                        />

                    ))
                }

            </div>

        </div>

    );
}

export default TheaterCard;