import React from "react";

const MovieCard = ({year, title, type, poster}) => {
    return (
        <div className="movie_card">
            <div className="movie_year">{year}</div>
            <div className="movie_img">
                <img src={poster} alt={title} className="cover" />
            </div>
            <div className="movie_type">{type}</div>
            <div className="movie_title">{title}</div>
        </div>
    )
}

export default MovieCard