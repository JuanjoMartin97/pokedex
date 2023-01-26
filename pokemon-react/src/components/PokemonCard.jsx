import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";

export function PokemonCard({ pokemon }) {
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    pokemon.id +
    ".png";
  return (
    <li className={styles.pokemonCard}>
      <Link to={"/detalle/" + pokemon.id}>
        <img
          className={styles.pokemonCardImage}
          width={230}
          height={230}
          src={imageURL}
          alt={pokemon.name}
        />
        <div>{pokemon.name}</div>
      </Link>
    </li>
    
  );
  
}
