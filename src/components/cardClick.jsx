import { useEffect } from "react";
import { useState } from "react";
export default function CardClick({ data }) {
    const [acquiredCard, setAcquiredCard] = useState([]);
    const [deck, setDeck] = useState([]);
    const [count,setCount] = useState(0);
    

    useEffect(() => {
        if(data.length > 0) {
            setDeck(shuffleArray(data))
        };
    }, [data]);
    const clickCard = (pokemon) => {
        const alreadyExists = acquiredCard.some(item => item === pokemon);
        if(alreadyExists) {
            setCount(0);
            setAcquiredCard([]);
            console.log("You lose")
        } else {
            setCount((prev) => prev + 1);
            setAcquiredCard((prev) => [...prev, pokemon]);
            setDeck((prev) => shuffleArray(prev));
        }
    };
    const shuffleArray = (array) => {
        const arr = [...array];
        for(let i = arr.length - 1; i > 0; i--) {
            const j =  Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    return (
      <div className="cardContainer">
        {deck.map((pokemon) => (
          <div key={pokemon.id} className="pokeCard" onClick={() => clickCard(pokemon)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          ))}

          <h2>{count}</h2>
          </div>
    );
  }
  