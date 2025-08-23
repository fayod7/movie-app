import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"


interface IParams {
    page?: string;
    with_genres?: string
    sort_by?: string
    "release_date.lte"?: string
    "release_date.gte"?: string
}

export  const useMovie = () => {
    const getMovies = (params?: IParams) => useQuery({
        queryKey: ["movie-key", params],
        queryFn: ()=> api.get("/discover/movie",
            {
                params: { ...params, without_genres: "10749,36,18,99,27" },
            }
        ).then(res => res.data),
        gcTime: 1000 * 60 * 5, //cache time
        staleTime: 1000 * 60 //fresh time
    })
    const getMovieById = (id: number) => useQuery({
        queryKey: ["movie-key", id],
        queryFn: () => api.get(`/movie/${id}`).then(res => res.data)
    });
    const getMovieItems = (id: number, path:string) => useQuery({
        queryKey: ["movie-key", id, path],
        queryFn: () => api.get(`/movie/${id}/${path}`).then(res => res.data)
    });

    return { getMovies, getMovieItems, getMovieById }
}