
export interface IPopularFilm {
    poster_path: string,
    title: string,
    type: string,
    release_date: string,
    id:number,
    original_language: string,
    vote_average: number,
    vote_count: number,
    genres:[
        {
            id: number,
            name: string   
        }
    ],
    runtime: number,
    overview:string,
    tagline:string
}

export interface Films {
    page: number,
    results: IPopularFilm[],
    total_pages: number,
    total_results: number,
}