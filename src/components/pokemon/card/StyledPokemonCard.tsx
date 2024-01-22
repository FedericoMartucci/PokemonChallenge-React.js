import styled from "styled-components";
import { Theme } from "../../../utils/theme";

interface StyledPokemonCardProps {
    backgroundColor: string | undefined;
    theme: Theme;
}

export const StyledPokemonCard = styled.div<StyledPokemonCardProps>`
  width: 320px;
  height: 360px;
  display: flex;
  background-color: ${(props: StyledPokemonCardProps) => props.theme.background.secondary};
  border-radius: 64px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    color: ${(props: StyledPokemonCardProps) => props.theme.text.secondary};
    box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.3);
    background-color:${(props: StyledPokemonCardProps) => props.backgroundColor};
  }

  @media (max-width: 400px) {
    width: 80vw;
    height: 60vh;
  }
`;
