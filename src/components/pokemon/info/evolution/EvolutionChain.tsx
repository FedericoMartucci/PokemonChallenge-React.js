import React from "react";
import { NavLink } from "react-router-dom";
import { StyledEvolutionChain } from "./StyledEvolutionChain";
import { LightTheme } from "../../../../utils/theme";

interface EvolutionChainProps {
  pokemonInfo: any;
  color: string | undefined;
}

export default function EvolutionChain({
  pokemonInfo,
  color,
}: EvolutionChainProps) {
  return (
    <StyledEvolutionChain>
      {pokemonInfo.evolution.map((evolution: { id: string; name: string }) => (
        <NavLink
          key={evolution.id}
          style={({ isActive }) =>
            isActive
              ? { backgroundColor: color }
              : { backgroundColor: LightTheme.background?.secondary }
          }
          className={({ isActive }) =>
            isActive ? "active-evolution" : "evolution"
          }
          to={`/pokemon/${evolution.id}`}
        >
          {evolution.name}
        </NavLink>
      ))}
    </StyledEvolutionChain>
  );
}
