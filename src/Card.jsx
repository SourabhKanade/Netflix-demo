import React from "react";

function Card(props) {
  return (
    <>
      <div className="grid">
        <div className="grid-item">
          <img className="card_img" src={props.imgsrc} alt="myPic" />
          <div className="card-content">
            <span className="card_header">{props.cname}</span>
            <h3 className="card_text">{props.title}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button className="card-btn"> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;