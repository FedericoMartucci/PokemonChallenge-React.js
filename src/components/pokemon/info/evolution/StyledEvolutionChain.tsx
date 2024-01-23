import styled from "styled-components";
import { Theme } from "../../../../utils/theme";

interface EvolutionChainProps {
  theme: Theme;
}

export const StyledEvolutionChain = styled.div<EvolutionChainProps>`
  width: 50%;
  height: 15%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;

  .evolution:active,
  .active-evolution:active {
    box-shadow: 0px 0px 4px 2px ${(props: EvolutionChainProps) =>
      props.theme.shadow.white};
  }

  .evolution,
  .active-evolution,
  .evolution:active,
  .active-evolution:active,
  .evolution:link,
  .active-evolution:link,
  .evolution:visited,
  .active-evolution:visited,
  .evolution:focus,
  .active-evolution:focus,
  .evolution:hover,
  .active-evolution:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props: EvolutionChainProps) =>
      props.theme.text.main};
    text-decoration: none;
    width: 30%;
    height: 25%;
    outline: ${(props: EvolutionChainProps) =>
      props.theme.outline.black} solid 1px;
    box-shadow: 0px 0px 4px 2px ${(props: EvolutionChainProps) =>
      props.theme.shadow.black};
    border-radius: 64px;
    text-transform: capitalize;
  }

  &.evolution,
  &.evolution:active,
  &.evolution:link,
  &.evolution:visited,
  &.evolution:focus,
  &.evolution:hover {
    background-color: ${(props: EvolutionChainProps) =>
      props.theme.background.secondary};
  }

  @media (max-width: 576px) {
    &.evolution,
    &.active-evolution,
    &.evolution:active,
    &.active-evolution:active,
    &.evolution:link,
    &.active-evolution:link,
    &.evolution:visited,
    &.active-evolution:visited,
    &.evolution:focus,
    &.active-evolution:focus,
    &.evolution:hover,
    &.active-evolution:hover {
      width: 45%;
      height: 12%;
      font-size: 0.75rem;
    }

    height: 20%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;
