import styled, { css } from "styled-components";
import { CSSProperties } from "react";

type ContainerProps = {
  hoverable?: boolean;
} & CSSProperties;

const ContainerBase = styled.div`
  height: 100%;
  transition: 0.3s ease-in-out;
  scrollbar-width: auto;
  width: 100%;
`;

export const StyledContainer = styled(ContainerBase).attrs<ContainerProps>(
  (props) => ({
    style: props,
  })
)<ContainerProps>`
  &:hover {
    ${(props) =>
      props.hoverable &&
      css`
        background-color: ${props.theme.colors.hover};
        cursor: pointer;
      `}
  }
`;

export const StyledScrollableContainer = styled(StyledContainer)`
  scrollbar-width: none;
`;

export const StyledOverflowContainer = styled(StyledContainer)``;
