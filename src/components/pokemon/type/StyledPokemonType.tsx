import styled from "styled-components";
import { Theme } from "../../../utils/theme";

interface PokemonTypeProps {
  backgroundColor: string | undefined;
  theme: Theme;
}

export const StyledPokemonType = styled.div<PokemonTypeProps>`
  border-radius: 64px;
  outline: auto;
  outline-color: ${(props: PokemonTypeProps) => props.theme.outline.black};
  padding: 4px;
  background-color: ${(props: PokemonTypeProps) => props.backgroundColor};
`;
