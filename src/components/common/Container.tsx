import styled, { css } from "styled-components";
import { CSSProperties } from "react";

type ContainerProps = {
  hoverable?: boolean;
} & CSSProperties;

const ContainerBase = styled.div`
  transition: 0.3s ease-in-out;
  scrollbar-width: auto;
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
        cursor: pointer;
      `}
  }
`;

export const StyledScrollableContainer = styled(StyledContainer)`
  scrollbar-width: none;
`;

export const StyledOverflowContainer = styled(StyledContainer)``;
