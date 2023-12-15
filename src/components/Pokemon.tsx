import PokemonCard from "./PokemonCard";
import Loader from "./Loader";

import { PokemonProps } from "../utils/types";

import usePokemon from "../hooks/usePokemon";

export default function Pokemon ({ value, filters }: PokemonProps) {
    const { isLoading, pokemons } = usePokemon({ value, filters });
    
    return isLoading? (<Loader/>) : (
        <div className="pokemon-list">
            {
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} {...pokemon}/>
                ))
            }
        </div>
    );
}