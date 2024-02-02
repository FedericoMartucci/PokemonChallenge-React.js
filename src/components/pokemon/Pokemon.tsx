import PokemonCard from "./card/PokemonCard";
import Loader from "../loader/Loader";

import { PokemonProps } from "../../utils/types";

import usePokemon from "../../hooks/usePokemon";
import { StyledPokemonContainer } from "./StyledPokemonContainer";

export default function Pokemon ({ value, filters }: PokemonProps) {
    const { isLoading, pokemons } = usePokemon({ value, filters });
    
    return isLoading? (<Loader/>) : (
        <StyledPokemonContainer>
            {
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} {...pokemon}/>
                ))
            }
        </StyledPokemonContainer>
    );
}