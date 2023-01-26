import { PokemonCard } from "./PokemonCard";
import { useParams } from "react-router-dom";
import styles from "./PokemonGrid.module.css";
import { useEffect, useState } from "react";
import{get} from "../utils/httpClient"

export function PokemonGrid() {

  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    get("pokemon?limit=100000&offset=0").then((data) => {
        setPokemons(data.results);
      });
  },[]);

  return (
    <ul className={styles.pokemonGrid}>
      {pokemons.map((pokemon, index) => (
        <PokemonCard key={index + "/"} pokemon={index} />

        ))}
    </ul>
  );
  
}



// const getPokemons = async () => {
  //   const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  //   const data = await response.json();
  //   console.log(data.results[1]);
    
  //   return data.results;
  // };
  // getPokemons()