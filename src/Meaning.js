import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="parts">{props.meaning.partOfSpeech}</div>
      <div className="definition">{props.meaning.definition}</div>
      <Examples example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
