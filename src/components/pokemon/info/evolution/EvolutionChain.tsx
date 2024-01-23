import React from "react";
import { NavLink } from "react-router-dom";
import { StyledEvolutionChain } from "./StyledEvolutionChain";

interface EvolutionChainProps {
  pokemonInfo: any;
}

export default function EvolutionChain({ pokemonInfo }: EvolutionChainProps) {
  return (
    <StyledEvolutionChain>
      {pokemonInfo.evolution.map((evolution: { id: string; name: string }) => (
        <NavLink
          key={evolution.id}
          className={({ isActive }) =>
            isActive
              ? `active-evolution ${pokemonInfo.type}-pokemon-type`
              : "evolution"
          }
          to={`/pokemon/${evolution.id}`}
        >
          {evolution.name}
        </NavLink>
      ))}
    </StyledEvolutionChain>
  );
}
