import FilterButton from "./FilterButton";
import Logo from "./Logo"
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

import { NavBarProps } from "../utils/types";

import useNavBar from "../hooks/useNavBar";

export default function NavBar ({handleValueSearched, handleSearchWithFilters}: NavBarProps) {
    const { handleFilter, handleFilters, handleSearch, displayFilter, colors, types } = useNavBar({handleValueSearched, handleSearchWithFilters});

    return (
        <nav>
            <div className="nav-bar">
                <FilterButton handleFilter={handleFilter}></FilterButton>
                <SearchBar handleSearch={handleSearch}></SearchBar>
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