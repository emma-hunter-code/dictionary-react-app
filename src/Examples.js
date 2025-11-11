import React from "react";
import "./Examples.css";

export default function Examples(props) {
  if (props.example) {
    return (
      <span className="Examples">
        <p>"{props.example}"</p>
      </span>
    );
  }
}
