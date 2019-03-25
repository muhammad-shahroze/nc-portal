import React from "react";
import { Link } from "@reach/router";

function Navlinks() {
  return (
    <div className="nav">
      <Link to="/">
        <button className="nav-buttons">Home</button>
      </Link>
      <Link to="/topics">
        <button className="nav-buttons">Topics</button>
      </Link>
      <Link to="/articles">
        <button className="nav-buttons">Articles</button>
      </Link>
    </div>
  );
}

export default Navlinks;
