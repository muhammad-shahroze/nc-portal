import React from "react";
import { Link } from "@reach/router";

function TitlePage() {
  return (
    <Link to="/">
      <div className="row">
        <div className="col-md-6">
          <h1 className="title">Northcoders News Portal</h1>
        </div>
      </div>
    </Link>
  );
}

export default TitlePage;
