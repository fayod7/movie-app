import { useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export  const useMovie = () => {
    const getMovies = () => useQuery({
        queryKey: ["movie-key"],
        queryFn: ()=> api.get("/discover/movie").then(res => res.data)
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