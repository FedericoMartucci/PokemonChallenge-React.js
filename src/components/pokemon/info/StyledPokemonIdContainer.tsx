import styled from "styled-components";
import { Theme } from "../../../utils/theme";

interface PokemonIdProps {
    theme: Theme;
}

export const StyledPokemonIdContainer = styled.div<PokemonIdProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 80%;
    border-radius: 64px;
    color: ${(props: PokemonIdProps) => props.theme.background.secondary};
`