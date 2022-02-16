import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import {useFlip} from './hooks';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [up, toggleUp] = useFlip();

  return (
    <img
      src={up ? front : back}
      alt="playing card"
      onClick={toggleUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
