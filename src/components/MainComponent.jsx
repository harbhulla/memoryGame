import { useState, useEffect } from "react";
import CardClick from "./CardClick";

export default function MainComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pokemonArray = ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Eevee', 'Mewtwo', 'Lucario', 'Greninja', 'Gengar', 'Snorlax', 'Jigglypuff', 'Meowth'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = pokemonArray.map(async (pokemon) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const result = await response.json();
          return result;
        });

        const results = await Promise.all(promises);
        setData(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <CardClick data={data} />;
}
