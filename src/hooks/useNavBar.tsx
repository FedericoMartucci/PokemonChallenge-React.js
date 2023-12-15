import { useEffect, useState } from 'react'

import { getTypes, getColors } from '../utils/pokemon-utils';
import { Filter, NavBarProps } from '../utils/types';

export default function useNavBar({ handleValueSearched, handleSearchWithFilters }: NavBarProps) {
    const [displayFilter, setDisplayFilters] = useState<boolean>(false);
    const [colors, setColors] = useState<string[]>([]);
    const [types, setTypes] = useState<string[]>([]);

    useEffect(() => {
        (async function() {
            try{
                setTypes(await getTypes());
                setColors(await getColors());
            } catch (e) {
                console.log("Error getting info: ", e)
            }
        })();
    }, []);

    const handleSearch = (value: string): void => {
        handleValueSearched(value);
    }

    const handleFilter = (isFiltering: boolean): void => {
        setDisplayFilters(!isFiltering)
    }

    const handleFilters = (filters: Filter): void => {
        handleSearchWithFilters(filters);
    }
    
    return { handleFilter, handleFilters, handleSearch, displayFilter, colors, types };
}
