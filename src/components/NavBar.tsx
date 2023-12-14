import { useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import Logo from "./Logo"
import ToogleBar from "./ToogleBar";
import { getColors, getTypes } from "../utils/pokemon-utils";
import FilterBar from "./FilterBar";

function NavBar (props: any) {
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

    const handleSearch = (value: string) => {
        props.handleValueSearched(value);
    }

    const handleFilter = (isFiltering: boolean) => {
        setDisplayFilters(!isFiltering)
    }

    const handleFilters = (isBaby: boolean, color: string, weight: number[], types: string[]) => {
        props.handleSearchWithFilters(isBaby, color, weight, types);
    }    
    return (
        <nav>
            <div className="nav-bar">
                <FilterButton handleFilter={handleFilter}></FilterButton>
                <ToogleBar handleSearch={handleSearch}></ToogleBar>
                <Logo></Logo>
            </div>
            {
                displayFilter && (
                    <FilterBar handleFilters={handleFilters} colors={colors} pokemonTypes={types}/>
                )
            }
        </nav>
    );
}

export default NavBar;