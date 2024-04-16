import React from "react";
import { Link } from "react-router-dom";

function Links() {
  return (
    <ul className="links-ul">
      <li className="links-li">
        <Link className="links-li__a" to="/">
          Home
        </Link>
      </li>
      <li className="links-li">
        <Link className="links-li__a" to="/counter">
          Counter
        </Link>
      </li>
      <li className="links-li">
        <Link className="links-li__a" to="/users">
          Users
        </Link>
      </li>
    </ul>
  );
}

export default Links;
