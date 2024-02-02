import styled from "styled-components";
import { Theme } from "../../../utils/theme";

interface StyledBackgroundProps {
  theme: Theme;
}

export const StyledBackground = styled.div<StyledBackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props: StyledBackgroundProps) => props.theme.shadow.black};
  width: 100vw;
  height: 100vh;
`;
