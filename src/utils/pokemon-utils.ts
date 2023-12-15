import { gql } from "@apollo/client"
import client from "./apollo-client"
import axios from "axios";
import { Filter } from "../utils/types";

export async function getTypes(){
  const { data } = await client.query({
    query: gql`
      query {
        pokemon_v2_type {
          name
        }
      }`
  })

  const types = data.pokemon_v2_type.map((type: {name: string}) => type.name);

  return types;
}

export async function getColors(){
  const { data } = await client.query({
    query: gql`
      query {
        pokemon_v2_pokemoncolor {
          name
        }
      }`
  })

  const colors = data.pokemon_v2_pokemoncolor.map((color: {name: string}) => color.name);

  return colors;
}

export async function getPokemons(offset: number, searchedValue: string, filters: Filter){
  const { data } = await client.query({
    query: gql`
    query getPokemons($offset: Int!, 
                      $searchedValue: String!,
                      $isBaby: Boolean!,
                      $minWeight: Int!,
                      $maxWeight: Int!,
                      $color: String!,
                      $types: [String!]) {
    pokemon_v2_pokemon(limit: 10, offset: $offset, 
                      where: {name: {_iregex: $searchedValue}, 
                      pokemon_v2_pokemonspecy: {is_baby: {_eq: $isBaby,},
                      pokemon_v2_pokemoncolor: {name: {_iregex: $color}}},
                      weight: {_gte: $minWeight, _lte: $maxWeight},
                      pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_${!filters.types.length? ('n') : ('')}in: $types}}}}) {
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
        searchedValue: searchedValue,
        isBaby: filters.isBaby,
        minWeight: filters.weight[0],
        maxWeight: filters.weight[1],
        color: filters.color,
        types: filters.types
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
                  pokemon_v2_pokemonspecies (order_by: {order: asc}){
                    id
                    name
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
        evolution: data.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy.pokemon_v2_evolutionchain.pokemon_v2_pokemonspecies,
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