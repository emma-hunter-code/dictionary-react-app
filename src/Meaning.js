import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <hr />
      <p>
        <strong>{props.meaning.partOfSpeech}</strong>
        <br />
        <br />
        <strong>Definition:</strong> {props.meaning.definition}
        <br />
        <Examples example={props.meaning.example} />
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
}
