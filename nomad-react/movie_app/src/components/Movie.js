import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, cover_image, genres }) {
  return (
    <li className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            cover_image,
            genres,
          },
        }}
      >
        <div className="movie__info">
          <div className="movie__poster">
            <img src={cover_image} alt={title}></img>
          </div>
          <div className="movie__description">
            <div className="movie__year">
              <h4>{year}</h4>
            </div>
            <div className="movie__title">
              <h3>{title}</h3>
            </div>
            <div className="movie__genres">
              <ul>
                {genres.map((genre, index) => (
                  <li key={index} className="genre">
                    {genre}
                    {index !== genres.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </div>
            <div className="movie__summary">
              <p>{summary}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
