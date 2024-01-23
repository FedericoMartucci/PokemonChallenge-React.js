import React, { useEffect, useState } from "react";
import WaveImg1 from "../../../assets/wave-1.svg";
import WaveImg2 from "../../../assets/wave-2.svg";
import WaveImg3 from "../../../assets/wave-3.svg";
import WaveImg4 from "../../../assets/wave-4.svg";
import WaveImg5 from "../../../assets/wave-5.svg";
import BackIcon from "../../../assets/BackIcon.png";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonById } from "../../../utils/pokemon-utils";
import Loader from "../../loader/Loader";
import { StyledP } from "../../common/text/P";
import { Sizes } from "../../../utils/types";
import { StyledImage } from "../../common/Image";
import { StyledPokemonIdContainer } from "./StyledPokemonIdContainer";
import { StyledA } from "../../common/A";
import { StyledPokemonInfo } from "./StyledPokemonInfo";
import EvolutionChain from "./evolution/EvolutionChain";
import { StyledContainer } from "../../common/Container";
import { StyledUl } from "../../common/Ul";
import { StyledLi } from "../../common/Li";

export default function PokemonInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonById(Number(id));
        setPokemonInfo(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return !pokemonInfo ? (
    <Loader />
  ) : (
    <StyledPokemonInfo>
      <EvolutionChain pokemonInfo={pokemonInfo} />
      <div className={`${pokemonInfo.type}-pokemon-type pokemon-info-type`}>
        <StyledPokemonIdContainer>
          <StyledA
            width={"2.5rem"}
            height={"2.5rem"}
            onClick={() => navigate(`/home`)}
          >
            <StyledImage width="100%" src={BackIcon} alt="Go to home" />
          </StyledA>
          <StyledP bold={true} size={Sizes.EXTRALARGE}>
            #{id?.toString().padStart(2, "0")}
          </StyledP>
        </StyledPokemonIdContainer>

        <StyledImage
          height="80%"
          width="70%"
          src={pokemonInfo.img}
          alt={`Pokemon ${pokemonInfo.name}`}
        />
        <span className="pokemon-text-info">{pokemonInfo.name}</span>
        <img className="wave-img" src={WaveImg1} alt="WaveImg1" />
        <img className="wave-img" src={WaveImg2} alt="WaveImg2" />
        <img className="wave-img" src={WaveImg3} alt="WaveImg3" />
        <img className="wave-img" src={WaveImg4} alt="WaveImg4" />
        <img className="wave-img" src={WaveImg5} alt="WaveImg5" id="shape" />
      </div>
      <div className="pokemon-info">
        <StyledContainer
          width="90%"
          display="flex"
          justifyContent="space-around"
        >
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
            <StyledLi className="pokemon-stat" key={index}>
              <StyledP size={Sizes.SMALL} primary={true} uppercase={true}>
                {statType.pokemon_v2_stat.name}
              </StyledP>
              <div
                className={`${pokemonInfo.type}-pokemon-type progress-bar`}
                data-text={`${statType.base_stat}/300`}
                style={
                  {
                    "--to-width": `${statType.base_stat / 3}%`,
                  } as React.CSSProperties
                }
              ></div>
            </StyledLi>
          ))}
          <StyledLi className="pokemon-stat">
            <StyledP size={Sizes.SMALL} primary={true} uppercase={true}>
              Experience
            </StyledP>
            <div
              className={`${pokemonInfo.type}-pokemon-type progress-bar`}
              data-text={`${pokemonInfo.base_experience}/300`}
              style={
                {
                  "--to-width": `${pokemonInfo.base_experience / 3}%`,
                } as React.CSSProperties
              }
            ></div>
          </StyledLi>
        </StyledUl>
      </div>
    </StyledPokemonInfo>
  );
}
