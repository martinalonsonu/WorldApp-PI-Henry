import React from "react";
import style from "./NoResults.module.css";
import image from "../../images/mundo.png";

function NoResults() {
  return (
    <div className={style.principal}>
      <div className={style.resultContainer}>
        <img src={image} alt="world" />
        <div className={style.textContainer}>
          <h2>Desired results were not found</h2>
          <p>Try modifying your search value</p>
        </div>
      </div>
    </div>
  );
}

export default NoResults;
