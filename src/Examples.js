import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <span className="Examples">
        <em>Example: {props.example}</em>
      </span>
    );
  }
}
