import React from "react";
import "../App.css";

export const Plans = ({ name, tag, price, button }) => {
  return (
    
      <div >
        <div className="price-int">
            <section className="plan-details">
          <h3>{name}</h3>
          <p>
            ${" "}
            <span style={{ fontSize: "2em", fontWeight: "bold" }}>{price}</span>
          </p>
          <p>{tag}</p>
          <button className="btn">{button}</button>
          </section>
        </div>
      </div>
    
  );
};
