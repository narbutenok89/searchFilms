
import React, { FormEvent, useEffect, useState } from "react";
import FilmCards from "../Components/Films/FilmCards";
import { IPopularFilm } from "../Components/Films/IPopularFilm";
import NotFound from "../Components/NotFound/NotFound";
import Spinner from "../Components/Spinner/Spinner";
import http from "../http";
import "./Home.css"
const url = "movie/popular?api_key=53003085b38bd90327822eaed1cd1936&language=en-US";
               
const Home = () => {
    const [films, setFilms] = useState<IPopularFilm[]>([]);
    const [url_Change, setUrl] = useState(url);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const[ searchFilms, setSearchFilms] = useState('')
    const [value, setValue] = useState(false);
   
    const getFilms = () => {
        setIsLoading(true);
            http.get(url_Change+`&page=${page}`).then(res => {
                setTotalPages(res.data.total_pages);
                setFilms((films) =>
                    page == 1 ? [...res.data.results] : [...films,...res.data.results]);
            setIsLoading(false);
        }).catch(() => setError("Error while loading data. Try again later."));
    }

        useEffect(() => {
            getFilms();
        }, [ page, url_Change]);

        const loadMore = () => {
            setPage((page) => page + 1);
        }
        const onSearch =(event: FormEvent<HTMLFormElement>)=>{
            if(searchFilms != ""){
                setFilms([]);
                event.preventDefault();
                const url_search = `search/movie?api_key=53003085b38bd90327822eaed1cd1936&language=en-US&query=${searchFilms}`;
                setUrl(url_search);
                setValue(true);
                setSearchFilms("");
            }
        }
    return (
        <>
            <div className="container_form">
                <form className="d-flex" role="search"  onSubmit={event => onSearch(event)}>
                    <input 
                        className="form-control me-2" 
                        type="text" 
                        placeholder="Search movie..."
                        aria-label="Search"
                        value={searchFilms}
                        onChange={(event)=> setSearchFilms(event.target.value)}/>
                    <button className="btn btn-outline-success" type='submit'>Search</button>
                </form>
            </div> 
            <div className="result" >
            { isLoading && <Spinner />}
            { films.length 
                ?
                <>
                    <h2 className="h2" style={{color:"white"}}>
                        {!value ? "Popular movies" : "Search result"}
                    </h2>
                    <FilmCards films={films}/>
                    {totalPages > 1 || totalPages == page? 
                        <button type="button" 
                            className="btn btn-primary btn-lg mt-3 mb-3"
                            onClick={() => loadMore()}
                        >
                            {isLoading ? "Loading..." : "Load More"}
                        </button>
                    : 
                        null
                    }
                </>
                    :
                    <NotFound/> 
                }      
                {error && <p>{error}</p>}
            </div> 
       </>
    );
};

export default Home;



