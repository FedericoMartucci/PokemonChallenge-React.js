
import styled from "styled-components";

type StyledButtonProps = {
  onClick: () => void;
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font-color-main);
  height: 50%;
  width: 5%;
  background-color: var(--background-color-main);
  margin-left: 8px;
  border: none;
  outline: black solid 1px;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);
  border-radius: 64px;

  &:hover {
    background-color: #EE0000;
    transition: 0.2s;
}

  &:active {
    box-shadow: 0px 0px 4px 2px rgba(255, 255, 255, 0.4);
}
`;