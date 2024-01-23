import styled from "styled-components";
import { Theme } from "../../../utils/theme";

interface StyledPokemonInfoProps {
  theme: Theme;
}

export const StyledPokemonInfo = styled.div<StyledPokemonInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: StyledPokemonInfoProps) => props.theme.shadow.black};
  width: 100vw;
  height: 100vh;
`;
