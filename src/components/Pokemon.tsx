import { useState, useEffect } from "react";
import { getPokemons } from "../utils/api";

function Pokemon () {
    const [pokemons, setPokemons] = useState<any[]>([]);
    useEffect(() => {
        (async function() {
            const pokemons: any[] = await getPokemons();
            setPokemons(pokemons);
        })();
    }, []);
    return (
        <div className="pokemon">
            {
                pokemons.map((pokemon) => (
                    <div key={pokemon.id}>
                        <img src={pokemon.sprites.other.dream_world.front_default} alt="Pokemon" />
                    </div>
                ))
            }
        </div>
    );
}

export default Pokemon;