import React from "react";
import "./header.css";

const Header = ({ countContacts, countFavorites }) => {
  return (
    <>
      <div className="row col-12">
        <div className="alert alert-primary col-6" role="alert">
          <h3>Count contacts: <span className="badge bg-secondary">{countContacts}</span></h3>
        </div>
        <div className="alert alert-primary col-6" role="alert">
          <h3>Favorite contacts: <span className="badge bg-secondary">{countFavorites}</span></h3>
        </div>
      </div>
    </>
  );
};

export default Header;
