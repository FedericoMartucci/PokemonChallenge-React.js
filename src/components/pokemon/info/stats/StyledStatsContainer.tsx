import styled from "styled-components";
import { Theme } from "../../../../utils/theme";

interface StatsContainerProps {
  theme: Theme;
}

export const StyledStatsContainer = styled.div<StatsContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props: StatsContainerProps) =>
    props.theme.background.secondary};
  width: 60vw;
  height: 40vh;
  border-bottom-left-radius: 64px;
  border-bottom-right-radius: 64px;
  
  @media (max-width: 768px) {
    width: 80vw;
    height: 30vh;
  }
`;
