import { useState, useEffect } from "react";
import { getPokemons } from "../utils/api";
import '../Pokemon.css';
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";

function Pokemon () {
    const [isLoading, setIsLoading] = useState (true)
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [offset, setOffset] = useState<number>(0);
    useEffect(() => {
        (async function() {
            try{
                const pokemons: any[] = await getPokemons(offset);
                if(offset)
                    setPokemons(prevPokemons => [...prevPokemons, ...pokemons]);
                else
                    setPokemons(pokemons)
            } catch (e) {
                console.log("Error loading pokemons: ", e)
            }
            finally {
                setIsLoading(false)
            }
        })();
    }, [offset]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            setIsLoading(true)
            setOffset((prevOffset) => prevOffset + 10)
        }
    };
    
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