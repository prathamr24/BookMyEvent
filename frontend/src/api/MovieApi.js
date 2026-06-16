import axiosInstance from "../services/axiosInstance";

export const getMovies = async () => {

    const response =
        await axiosInstance.get(
            "/movies"
        );

    return response.data;
};

export const getMovieById = async (
    movieId
) => {

    const response =
        await axiosInstance.get(
            `/movies/${movieId}`
        );

    return response.data;
};