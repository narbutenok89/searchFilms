import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/context";
import { globalContext } from "../../Context/Wachlist/WachlistContext";
import star from "./images/star.png";
import { IPopularFilm } from './IPopularFilm';
import './CardMovie.css'

const CardsMovie = ({film}:{film:IPopularFilm}) => {
    const { globalState, dispatch } = useContext(globalContext);
    const { isAuth } = useContext(Context);

    function isMovieAddList () {
        return globalState.watchlist.some((addMovie: IPopularFilm) => addMovie.id === film.id);
    }
    const [isMovieList, setMovieList] = useState(isMovieAddList());
    const toggle = () => {
        if (!isMovieList) {
            addMovieToWatchlist();
        } else {
            removeMovieToWatchlist();
        }
    };

    function addMovieToWatchlist() {
        if (!isMovieList) {
            setMovieList(true);
            dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: film });
        }
    }

    const removeMovieToWatchlist = () => {
        setMovieList(false);
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: film.id });
    }
    
    const watchedDisabled = isMovieAddList() ? true : false;
    return (
        <div className="col" key={film.id}>
            <div className="card ms-2">
                <Link to={`home/${film.id.toString()}`}>
                    {<img src={film.poster_path
                        ?
                        get_poster_url(film.poster_path)
                        :
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoWcWg0E8pSjBNi0TtiZsqu8uD2PAr_K11DA&usqp=CAU"
                        } 
                        className="card-img-top" alt="postr"/>
                    }
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                    <Link style={{textDecoration: "none", color: "black"}} to={`home/${film.id.toString()}`}>
                        {film.title}
                    </Link>
                    </h5>
                    <div className="p">
                        <p className="card-text">{film.release_date}</p>
                    </div>
                    <div className="icon_star">
                        <img src={star} alt="raiting"/>
                        <p className="card-text">{film.vote_average}</p>
                    </div>
                </div>
                <div className="overlay">
                    {isAuth 
                        ? 
                        <>
                            {!isMovieList ?
                                <button type="button" 
                                    className="btn btn-dark"disabled={watchedDisabled}
                                    onClick={addMovieToWatchlist}
                                >
                                    Add to watchlist
                                </button>
                                : 
                                <button type="button" 
                                    className="btn btn-dark"
                                    onClick={removeMovieToWatchlist}
                                >
                                    Remove
                                </button>
                            }
                        </>
                        : null
                    } 
                </div>
            </div>
        </div>
    );
};

export default CardsMovie;

function get_poster_url(poster_path: string): string | undefined {
    return "https://image.tmdb.org/t/p/w200" + poster_path;
}
