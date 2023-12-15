import { useEffect, useState } from 'react'

import { getPokemons } from '../utils/pokemon-utils';

import { DEFAULT_FILTERS, Filter } from '../utils/types';
import { PokemonProps } from '../utils/types';

export default function usePokemon({ value, filters }: PokemonProps) {
    const [isLoading, setIsLoading] = useState (true)
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [searchedValue, setSearchedValue] = useState<string>('');
    const [appliedFilters, setAppliedFilters] = useState<Filter>(DEFAULT_FILTERS);
    useEffect(() => {
        (async function() {
            try{
                if(filters !== appliedFilters){
                    setAppliedFilters(filters);
                    setOffset(0);
                }
                if(value !== searchedValue){
                    setSearchedValue(value);
                    setOffset(0);
                }
                const pokemons: any[] = await getPokemons(offset, value, filters);
                offset? setPokemons(prevPokemons => [...prevPokemons, ...pokemons]) : setPokemons(pokemons);
            } catch (e) {
                console.log("Error loading pokemons: ", e)
            }
            finally {
                setIsLoading(false)
            }
        })();
    }, [offset, value, filters]);
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = (): void => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight) {
            setIsLoading(true)
            setOffset((prevOffset) => prevOffset + 10);
        }
    };

  return { isLoading, pokemons };
}
