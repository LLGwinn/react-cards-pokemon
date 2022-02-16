import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import {useAxios} from './hooks';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [newCards, setNewCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/");

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={setNewCards}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {newCards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
