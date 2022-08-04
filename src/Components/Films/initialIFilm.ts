import { IPopularFilm } from "./IPopularFilm";

export const initialValue: IPopularFilm = {
    poster_path: "",
    title: "",
    type: "",
    release_date: "",
    id: 0,
    original_language: "",
    vote_average: 0,
    vote_count: 0,
    genres: [
        {
            id:0,
            name: ""
        }
    ],
    runtime: 0,
    overview: "",
    tagline: ""
}
