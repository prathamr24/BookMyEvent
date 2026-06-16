import axiosInstance from "../services/axiosInstance";

export const getShowsByMovieId =
    async (movieId) => {

        const response =
            await axiosInstance.get(
                `/shows/movie/${movieId}`
            );

        return response.data;
    };