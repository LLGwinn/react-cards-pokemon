import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import {useAxios} from './hooks';

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const formatPokeData = (responseData) => {
    return {front: responseData.data.sprites.front_default,
            back: responseData.data.sprites.back_default,
            name: responseData.data.name,
            stats: responseData.data.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
  }

  const [newCards, setNewCards, removeCards] = 
    useAxios('https://pokeapi.co/api/v2/pokemon/', formatPokeData);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={setNewCards} />  
      </div>
      <div className="PokeDex-card-area">
        {newCards.map(cardData => (
          <PokemonCard
            key={cardData.id}
            front={cardData.front}
            back={cardData.back}
            name={cardData.name}
            stats={cardData.stats}
          />
        ))}
      </div>
      {newCards.length > 0 ? <button onClick={removeCards}>Remove cards</button> : null}
    </div>
  );
}

export default PokeDex;
