function ShowTimeButton({
    show,
    onSelect
}) {

    const time =
        new Date(
            show.startTime
        ).toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );

    return (

        <button
            onClick={() =>
                onSelect(show)
            }
            className="
            border
            border-green-500
            text-green-600
            px-5
            py-3
            rounded-lg
            hover:bg-green-50
            transition
            "
        >
            {time}
        </button>

    );
}

export default ShowTimeButton;