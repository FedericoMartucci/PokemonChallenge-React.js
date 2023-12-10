import { gql } from "@apollo/client"
import client from "./apollo-client"
import axios from "axios";

export async function getPokemonInfo(id: number){
    
    const dreamWorldImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const homeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

    let img = dreamWorldImg;

    try {
        await axios.get(dreamWorldImg);
    } catch (error) {
        console.error('Error fetching dream-world image:', error);
        img = homeImg;
    }
    const { data } = await client.query({
        query: gql`
        query findPokemonById($id: Int!) {
            pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
              id
              name
              pokemon_v2_pokemonspecy {
                pokemon_v2_evolutionchain {
                  pokemon_v2_pokemonspecies {
                    name
                    id
                  }
                }
              }
              pokemon_v2_pokemonstats(where: {pokemon_v2_stat: {name: {_neq: "special-attack"}}, _and: {pokemon_v2_stat: {name: {_neq: "special-defense"}}}}) {
                base_stat
                pokemon_v2_stat {
                  name
                }
              }
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  name
                }
              }
              height
              base_experience
              weight
            }
          }`,
          variables: {
            id: id
          }
    })
    const pokemonInfo = {  
        id: data.pokemon_v2_pokemon[0].id,
        img,
        name: data.pokemon_v2_pokemon[0].name,
        stats: data.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats,
        type: data.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
        height: data.pokemon_v2_pokemon[0].height,
        base_experience: data.pokemon_v2_pokemon[0].base_experience,
        weight: data.pokemon_v2_pokemon[0].weight
    }

    return pokemonInfo;
}