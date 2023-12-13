import { useState, useEffect } from "react";
import { getPokemons } from "../utils/pokemon-utils";
import '../Pokemon.css';
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";
import { debug, error } from "console";
interface PokemonProps {
    value: string;
  }
function Pokemon ({ value }: PokemonProps) {
    const [isLoading, setIsLoading] = useState (true)
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [searchedValue, setSearchedValue] = useState<string>('');

    useEffect(() => {
        (async function() {
            try{
                if(value !== searchedValue){
                    setSearchedValue(value);
                    setOffset(0);
                }
                const pokemons: any[] = await getPokemons(offset, value);
                offset? setPokemons(prevPokemons => [...prevPokemons, ...pokemons]) : setPokemons(pokemons);
            } catch (e) {
                console.log("Error loading pokemons: ", e)
            }
            finally {
                setIsLoading(false)
            }
        })();
    }, [offset, value]);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            setIsLoading(true)
            setOffset((prevOffset) => prevOffset + 10);
        }
    };
    
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

export default Pokemon;