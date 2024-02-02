import styled from "styled-components";
import { Theme } from "../../utils/theme";

interface StyledSearchBarProps {
    theme: Theme;
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: StyledSearchBarProps) => props.theme.background.secondary};
  border-radius: 64px;
  outline: 0.1vw ${(props: StyledSearchBarProps) => props.theme.outline.black} solid;
  width: 45.41vw;
  height: 5vh;
  max-height: 100%;
  margin: 40px 0px;
`;
