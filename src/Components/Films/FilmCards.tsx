import React from "react";
import { IPopularFilm } from "./IPopularFilm";
import "./FilmCards.css";
import CardsMovie from "./CardsMovie";

const FilmCards = (
    {
        films
    }: {
            films:IPopularFilm[]
        }) => {

    return (
        <div className="row row-cols-1 row-cols-md-5 mt-5 g-1">
            {films.length && films.map(film => 
                <CardsMovie key={film.id} film = {film} />
            )}
        </div>
    );
};

export default FilmCards;
