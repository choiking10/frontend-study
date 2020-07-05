import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, large_cover_image }) {
  return (
    <div class="movie">
      <img src={large_cover_image} alt={title}></img>
      <h3 class="movie__title">{title}</h3>
      <h5 class="movie__year">{year}</h5>
      <p class="movie__summary">{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  large_cover_image: PropTypes.string.isRequired,
};

export default Movie;
