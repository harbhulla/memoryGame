import { useEffect } from "react";
import { useState } from "react";
export default function CardClick({ data }) {
    const [acquiredCard, setAcquiredCard] = useState([]);
    const [inArray,setInArray] = useState([]);
    const clickCard = (pokemon) => {
        const alreadyExists = acquiredCard.some(item => item === pokemon);
        if(alreadyExists) {
            setInArray((prev) => [...prev,false]);
        } else {
            setInArray((prev) => [...prev, true]);
            setAcquiredCard((prev) => [...prev, pokemon]);
        }
    };
    return (
      <div className="cardContainer">
        {data.map((pokemon) => (
          <div key={pokemon.id} className="pokeCard" onClick={() => clickCard(pokemon)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    );
  }
  