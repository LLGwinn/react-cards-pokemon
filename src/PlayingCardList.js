import React from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import {useAxios} from './hooks';

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const formatCardData = (responseData) => {
    return {image: responseData.data.cards[0].image}
  }

  const [newCards, setNewCards, removeCards] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/", formatCardData);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={setNewCards}>Add a playing card!</button>  
      </div>
      <div className="PlayingCardList-card-area">
        {newCards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.image} />
        ))}
      </div>
      {newCards.length > 0 ? 
          <button onClick={removeCards}>Remove cards</button> : null}
    </div>
  );
}

PlayingCardList.defaultProps = {};

export default PlayingCardList;
