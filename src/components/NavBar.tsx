import FilterButton from "./filter-button/FilterButton";
import Logo from "./Logo"
import SearchBar from "./SearchBar";
import FilterBar from "./filter/FilterBar";

import { NavBarProps } from "../utils/types";

import useNavBar from "../hooks/useNavBar";
import { StyledContainer } from "./common/Container";
import { LightTheme } from "../utils/theme";

export default function NavBar ({handleValueSearched, handleSearchWithFilters}: NavBarProps) {
    const { handleFilter, handleFilters, handleSearch, displayFilter, colors, types } = useNavBar({handleValueSearched, handleSearchWithFilters});

    return (
        <nav>
            <StyledContainer 
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor={LightTheme.background?.main}
            height="11.11vh"
            >
                <FilterButton handleFilter={handleFilter}></FilterButton>
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <Logo></Logo>
            </StyledContainer>
            {
                displayFilter && (
                    <FilterBar handleFilters={handleFilters} colors={colors} pokemonTypes={types}/>
                )
            }
        </nav>
    );
}