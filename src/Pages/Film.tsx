
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { initialValue } from '../Components/Films/initialIFilm';
import { IPopularFilm } from '../Components/Films/IPopularFilm';
import http from '../http';
import './Film.css';

const Film = () => {
    const {movie_id} = useParams();
    const [film, setFilm] = useState<IPopularFilm>(initialValue);

        const getFilm = () => {
            http.get(`movie/${movie_id}?api_key=53003085b38bd90327822eaed1cd1936&language=en-US`).then(res => {
                console.log(res.data);
                setFilm(res.data);
            }).catch(err => console.log(err));
        }

        useEffect(() => {
            getFilm();
        }, []);

    return (
        <div className="container_film">
            <div className="card mt-5 ms-5" style={{maxWidth: "85vw"}}>
                <div className="row g-0" style={{padding: "0px"}}>
                    <div className="col-md-3">
                        <img src={get_poster_url(film.poster_path)} className="card-img-top" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{alignItems: "start"}}>
                            <h4 className="card-title">{film.title}</h4>
                            <p className="card-text">({new Date(film.release_date).getFullYear()})&#44; {film.runtime} min</p>
                            <p className="card-text"><span className="info">RATING:</span> {film.vote_average}</p>
                            <p className="card-text"><span className="info">GENRE:</span> {film.genres.map((item) => item.name).join(", ")}</p>
                            <p className="card-text"><span className="info">TAGLINES</span></p>
                            <p className="card-text">{film.tagline}</p>
                            <p className="card-text"><span className="info">STORYLINE</span></p>
                            <p className="card-textp" style={{textAlign:"start"}}>{film.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="home" className="btn btn-primary mt-3">
                Back to main page
            </Link>
        </div>
    );
};

export default Film;

function get_poster_url(poster_path: string): string | undefined {
    return "https://image.tmdb.org/t/p/w200" + poster_path;
}
