export default function CardClick({ data }) {
    const clickCard = () => {
        console.log("clicked");
    }
    return (
      <div className="cardContainer">
        {data.map((pokemon) => (
          <div key={pokemon.id} className="pokeCard" onClick={clickCard}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
        ))}
      </div>
    );
  }
  