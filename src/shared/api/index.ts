import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGIwNTE0Njc1N2E1ZjA4YTU4YTdhZmMyNzRhNzZkNCIsIm5iZiI6MTc1NTE1NjY4NC4zMywic3ViIjoiNjg5ZDkwY2MwMjNiNGFjYjg4MjY4ZGZjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.fOGeYIwPBJJPW9ZkE-wrnzSVa_gQw75xMsJWKlkW6yg"

    config.headers.Authorization = `Bearer ${token}`

    return config
})