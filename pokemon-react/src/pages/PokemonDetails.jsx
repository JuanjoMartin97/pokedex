import { useParams } from "react-router-dom";
import styles from "./PokemonDetails.module.css";
import { useState, useEffect } from "react";
import { get } from "../utils/httpClient";

export function PokemonDetails() {
  let type 
  const { pokemonId } = useParams();
  // const pokemon = pokedex.find((item) => item.id === parseInt(pokemonId)); //comparar los datos id del JSON y el id de la URL
  const imageURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    pokemonId +
    ".png";
  const [pokemon, setPokemons] = useState(null);
  useEffect(() => {
    get("pokemon/" + pokemonId + "/").then((data) => {
      setPokemons(data);
    });
  }, [pokemonId]);

  if (!pokemon) {
    return null;
  }

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.pokeImg}`}
        width={500}
        height={400}
        src={imageURL}
        alt=""
      />
      <div className={styles.col}>
        <p className={styles.firstItem}>
          <strong>Nombre:</strong> {pokemon.name}
        </p>
        <p><strong>Tipo:</strong>
          {pokemon.types.map((type) => (
            type = " " + type.type.name + " " 
          ))}
        </p>
        <p>
            <strong>Hp:</strong>
        </p>
        <p>

        </p>
        <p>

        </p>
      </div>
    </div>
  );
}
