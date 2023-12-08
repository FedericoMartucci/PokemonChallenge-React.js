import { useState, useEffect } from "react";
import { getPokemons } from "../utils/api";
import '../Pokemon.css';
import PokemonCard from "./PokemonCard";

function Pokemon () {
    const [pokemons, setPokemons] = useState<any[]>([]);
    useEffect(() => {
        (async function() {
            const pokemons: any[] = await getPokemons();
            setPokemons(pokemons);
        })();
    }, []);
    return (
        <div className="pokemon-list">
            {
                pokemons.map((pokemon) => (
                    <PokemonCard {...pokemon} key={pokemon.id}/>
                ))
            }
        </div>
    );
}

export default Pokemon;