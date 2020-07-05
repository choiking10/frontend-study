import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const { location } = this.props;
      const { year, title, summary, cover_image, genres } = location.state;
      return (
        <div>
          <img src={cover_image} alt={title}></img>
          <div>{year}</div>
          <div>{title}</div>
          <div>{summary}</div>
          <div>
            <ul>
              {genres.map((genre, index) => (
                <li key={index} className="genre">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
