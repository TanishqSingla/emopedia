import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji">{props.emote}</span>
        <span className="name">{props.name}</span>
      </dt>
      <dd>{props.define}</dd>
    </div>
  );
}

export default Card;
