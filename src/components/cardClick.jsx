import { useEffect } from "react";
import { useState } from "react";
export default function CardClick({ data }) {
    const [acquiredCard, setAcquiredCard] = useState([]);
    const [deck, setDeck] = useState([]);
    const [count,setCount] = useState(0);
    const [bestScore,setBestScore] = useState(0);
    useEffect(() => {
        if(data.length > 0) {
            setDeck(shuffleArray(data))
        };
    }, [data]);
    const clickCard = (pokemon) => {
        const alreadyExists = acquiredCard.some(item => item === pokemon);
        if(alreadyExists) {
            setBestScore((prev) => Math.max(prev, count + 1)); 
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
      <div className="container">
      
      <div className="scores">
      <div className="game">
        <h2>Memory Game</h2>
      </div>
        <h4>Score: {count}</h4>
          <h4>Best score: {bestScore}</h4>
          </div>
          <div className="title">Get points by clicking on an image, but dont click on anymore than once!</div>
          <div className="cardContainer">
        {deck.map((pokemon) => (
          <div key={pokemon.id} className="pokeCard" onClick={() => clickCard(pokemon)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          ))}
          </div>
          </div>
    );
  }
  