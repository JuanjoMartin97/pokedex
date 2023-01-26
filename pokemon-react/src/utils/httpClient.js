const API = "https://pokeapi.co/api/v2/";

export function get(path) {
    return fetch(API + path).then((result) => result.json());
  
}

