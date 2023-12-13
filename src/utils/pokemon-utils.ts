import { gql } from "@apollo/client"
import client from "./apollo-client"
import axios from "axios";

export async function getPokemons(offset: number, searchedValue: string){
  const { data } = await client.query({
    query: gql`
      query getPokemons($offset: Int!, $searchedValue: String!) {
        pokemon_v2_pokemon(limit: 10, offset: $offset, where: {name: {_iregex: $searchedValue}}) {
          id
          name
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
      `,
      variables: {
        offset: offset,
        searchedValue: searchedValue
      }
  })
  const pokemons = data.pokemon_v2_pokemon.map((pokemon: any) => {
    const id = pokemon.id;
    const name = pokemon.name;
    const types = pokemon.pokemon_v2_pokemontypes.map((type: any) => {
      return type.pokemon_v2_type.name;
    })
    let img;
    JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).other.dream_world.front_default?
      (img = JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).other.dream_world.front_default) :
      (img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`)

    return {id, name, types, img};
  })

  return pokemons;
}


export async function getPokemonById(id: number){
    
    const dreamWorldImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    const homeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

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