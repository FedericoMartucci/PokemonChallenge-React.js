import { LightTheme } from "./theme";
import { ColorType, Filter } from "./types";

export const ColorTypes: ColorType[] = [
  { type: "normal", color: LightTheme.types?.normal },
  { type: "fighting", color: LightTheme.types?.fighting },
  { type: "flying", color: LightTheme.types?.flying },
  { type: "poison", color: LightTheme.types?.poison },
  { type: "ground", color: LightTheme.types?.ground },
  { type: "rock", color: LightTheme.types?.rock },
  { type: "bug", color: LightTheme.types?.bug },
  { type: "ghost", color: LightTheme.types?.ghost },
  { type: "steel", color: LightTheme.types?.steel },
  { type: "fire", color: LightTheme.types?.fire },
  { type: "water", color: LightTheme.types?.water },
  { type: "grass", color: LightTheme.types?.grass },
  { type: "electric", color: LightTheme.types?.electric },
  { type: "psychic", color: LightTheme.types?.psychic },
  { type: "ice", color: LightTheme.types?.ice },
  { type: "dragon", color: LightTheme.types?.dragon },
  { type: "dark", color: LightTheme.types?.dark },
  { type: "fairy", color: LightTheme.types?.fairy },
  { type: "unknown", color: LightTheme.types?.unknown },
  { type: "shadow", color: LightTheme.types?.shadow },
];

export const MIN_VALUE: number = 0;
export const MAX_VALUE: number = 1500;

export const DEFAULT_FILTERS: Filter = {
  isBaby: false,
  color: "",
  weight: [MIN_VALUE, MAX_VALUE],
  types: [],
};
