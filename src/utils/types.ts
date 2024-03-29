import { LightTheme } from "./theme";

export type PokemonProps = {
  value: string;
  filters: Filter;
};

export type PokemonTypeProps = {
  type: string;
};

export type PokemonCardProps = {
  id: number;
  types: string[];
  name: string;
  img: string;
};

export type PokemonInfo = {
  id: number;
  name: string;
  stats: any[];
  type: string;
  height: number;
  base_experience: number;
  weight: number;
};

export type MainProps = {
  value: string;
  filters: Filter;
};

export type NavBarProps = {
  handleValueSearched: (value: string) => void;
  handleSearchWithFilters: (filters: Filter) => void;
};

export type SearchBarProps = {
  handleSearch: (value: string) => void;
};

export type FilterBarProps = {
  handleFilters: (filters: Filter) => void;
  colors: string[];
  pokemonTypes: string[];
};

export type FilterButtonProps = {
  handleFilter: (isFiltering: boolean) => void;
};

export type Stat = {
  stat: { name: string };
  base_stat: number;
};

export type Filter = {
  isBaby: boolean;
  color: string;
  weight: number[];
  types: string[];
};

export enum Sizes {
  EXTRASMALL = "EXTRASMALL",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  EXTRALARGE = "EXTRALARGE",
}

export enum ButtonType {
  FILTER = "FILTER",
  SEARCH = "SEARCH",
  APPLYFILTER = "APPLYFILTER",
}

export type ColorType = {
  type: string;
  color: string | undefined;
};
