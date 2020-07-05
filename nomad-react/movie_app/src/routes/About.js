import React from "react";

function About(props) {
  console.log(props);
  return (
    <div className="container" style={{ justifyContent: "center" }}>
      <div>About this page: I built it because I love movies</div>
    </div>
  );
}

export default About;
