import { useState, useEffect } from "react";
import { getPokemons } from "../utils/api";
import '../Pokemon.css';

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
                    <div className={`${pokemon.types[0].type.name}-type pokemon`} key={pokemon.id}>
                        <img className='pokemon-img' src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon" />
                        <span className="pokemon-name">{pokemon.name}</span>
                        <div className="pokemon-types">
                            {pokemon.types.map((types: { type: { name: string; }; }) => (
                                <span className={`pokemon-type ${types.type.name}-pokemon-type`}>{types.type.name}</span>
                                ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Pokemon;