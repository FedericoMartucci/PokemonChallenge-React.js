import React from "react";
import { Sizes } from "../../../../utils/types";
import { StyledContainer } from "../../../common/Container";
import { StyledLi } from "../../../common/Li";
import { StyledUl } from "../../../common/Ul";
import { StyledP } from "../../../common/text/P";
import { StyledStatsContainer } from "./StyledStatsContainer";
import { StyledProgressBar } from "./StyledProgressBar";

interface StatsProps {
  pokemonInfo: any;
  color: string | undefined;
}

export default function Stats({ pokemonInfo, color }: StatsProps) {
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
                stat={true}
              >
                {statType.pokemon_v2_stat.name}
              </StyledP>
            </StyledContainer>
            <StyledProgressBar
              backgroundColor={color}
              towidth={statType.base_stat / 3}
            >
              <StyledP primary={true} size={Sizes.EXTRASMALL} stat={true}>
                {statType.base_stat}/300
              </StyledP>
            </StyledProgressBar>
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
              stat={true}
            >
              Experience
            </StyledP>
          </StyledContainer>
          <StyledProgressBar
            backgroundColor={color}
            towidth={pokemonInfo.base_experience / 3}
          >
            <StyledP primary={true} size={Sizes.EXTRASMALL} stat={true}>
              {pokemonInfo.base_experience}/300
            </StyledP>
          </StyledProgressBar>
        </StyledLi>
      </StyledUl>
    </StyledStatsContainer>
  );
}
