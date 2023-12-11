import { useState, useEffect } from "react";
import { getPokemons } from "../utils/api";
import '../Pokemon.css';
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";

function Pokemon () {
    const [isLoading, setIsLoading] = useState (true)
    const [pokemons, setPokemons] = useState<any[]>([]);
    useEffect(() => {
        (async function() {
            try{
                const pokemons: any[] = await getPokemons();
                setPokemons(pokemons);
            } catch (e) {
                console.log("Error loading pokemons: ", e)
            }
            finally {
                setIsLoading(false)
            }
        })();
    }, []);
    if(isLoading)
        return <Loader/>
    return (
        <div className="pokemon-list">
            {
                pokemons.map((pokemon) => (
                    <PokemonCard {...pokemon}/>
                ))
            }
        </div>
    );
}

export default Pokemon;