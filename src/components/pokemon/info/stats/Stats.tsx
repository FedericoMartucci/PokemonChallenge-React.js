import React from "react";
import { Sizes } from "../../../../utils/types";
import { StyledContainer } from "../../../common/Container";
import { StyledLi } from "../../../common/Li";
import { StyledUl } from "../../../common/Ul";
import { StyledP } from "../../../common/text/P";
import { StyledStatsContainer } from "./StyledStatsContainer";

interface StatsProps {
  pokemonInfo: any;
}

export default function Stats({ pokemonInfo }: StatsProps) {
  return (
    <StyledStatsContainer>
      <StyledContainer width="90%" display="flex" justifyContent="space-around">
        <StyledContainer
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <StyledP primary={true} size={Sizes.SMALL}>
            {pokemonInfo.weight / 10}kg.
          </StyledP>
          <StyledP primary={true} size={Sizes.SMALL}>
            Weight
          </StyledP>
        </StyledContainer>
        <StyledContainer
          display="flex"
          flexDirection="column"
          textAlign="center"
        >
          <StyledP primary={true} size={Sizes.SMALL}>
            {pokemonInfo.height / 10}m.
          </StyledP>
          <StyledP primary={true} size={Sizes.SMALL}>
            Height
          </StyledP>
        </StyledContainer>
      </StyledContainer>
      <StyledUl>
        {pokemonInfo.stats.map((statType: any, index: number) => (
          <StyledLi key={index}>
            <StyledContainer
              display="flex"
              justifyContent="space-between"
              width="100%"
              marginTop="4px"
            >
              <StyledP
                size={Sizes.SMALL}
                primary={true}
                uppercase={true}
                isStat={true}
              >
                {statType.pokemon_v2_stat.name}
              </StyledP>
            </StyledContainer>
            <div
              className={`${pokemonInfo.type}-pokemon-type progress-bar`}
              data-text={`${statType.base_stat}/300`}
              style={
                {
                  "--to-width": `${statType.base_stat / 3}%`,
                } as React.CSSProperties
              }
            />
          </StyledLi>
        ))}
        <StyledLi>
          <StyledContainer
            display="flex"
            justifyContent="space-between"
            width="100%"
            marginTop="4px"
          >
            <StyledP
              size={Sizes.SMALL}
              primary={true}
              uppercase={true}
              isStat={true}
            >
              Experience
            </StyledP>
          </StyledContainer>
          <div
            className={`${pokemonInfo.type}-pokemon-type progress-bar`}
            data-text={`${pokemonInfo.base_experience}/300`}
            style={
              {
                "--to-width": `${pokemonInfo.base_experience / 3}%`,
              } as React.CSSProperties
            }
          />
        </StyledLi>
      </StyledUl>
    </StyledStatsContainer>
  );
}
