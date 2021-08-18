import React from "react";

export default function Project(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <a href="{props.url}" className="btn btn-primary">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
