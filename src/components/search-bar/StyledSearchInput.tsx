import styled from "styled-components";
import { Theme } from "../../utils/theme";

interface StyledSearchInputProps {
  theme: Theme;
}

export const StyledSearchInput = styled.input<StyledSearchInputProps>`
  &,
  &:focus,
  &:active {
    background-color: ${(props: StyledSearchInputProps) =>
      props.theme.background.secondary};
    width: 80%;
    max-width: 100%;
    max-height: 100%;
    font-size: 100%;
    color: ${(props: StyledSearchInputProps) => props.theme.shadow.black};
    outline: none;
    border: none;
    margin-left: 10px;
  }
  &:focus {
    color: ${(props: StyledSearchInputProps) => props.theme.text.main};
  }
`;
