import styled from "styled-components";

export const StyledFilterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5rem;
  color: var(--font-color-main);
  z-index: 1;
  height: 10vh;
  background-color: rgba(255, 0, 0, 0.3);

  @media (min-width: 576px) and (max-width: 768px) {
    height: 30vh;
    flex-wrap: wrap;
  }

  @media (max-width: 576px) {
    height: 60vh;
    flex-wrap: wrap;
  }
`;
