import styled, { keyframes } from "styled-components";

const filterItemAnimation = keyframes`
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
`;

export const StyledFilterItem = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${filterItemAnimation} 0.2s linear;
`;
