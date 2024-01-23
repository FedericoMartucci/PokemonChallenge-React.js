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
import { ColorType, Sizes } from "../../../utils/types";
import { StyledImage } from "../../common/Image";
import { StyledPokemonIdContainer } from "./StyledPokemonIdContainer";
import { StyledA } from "../../common/A";
import { StyledBackground } from "./StyledBackground";
import EvolutionChain from "./evolution/EvolutionChain";
import { StyledContainer } from "../../common/Container";
import { StyledUl } from "../../common/Ul";
import { StyledLi } from "../../common/Li";
import Stats from "./stats/Stats";
import { StyledInfoCard } from "./StyledInfoCard";
import { ColorTypes } from "../../../utils/constants";

export default function PokemonInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pokemonInfo, setPokemonInfo] = useState<any | null>(null);
  const colorType: ColorType | undefined = ColorTypes.find(
    (item: ColorType) => item.type === pokemonInfo.type
  );

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
    <StyledBackground>
      <EvolutionChain color={colorType?.color} pokemonInfo={pokemonInfo} />
      <StyledInfoCard backgroundColor={colorType?.color}>
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
        <StyledP size={Sizes.LARGE} primary={true}>
          {pokemonInfo.name}
        </StyledP>
        <StyledImage className="wave-img" src={WaveImg1} alt="WaveImg1" />
        <StyledImage className="wave-img" src={WaveImg2} alt="WaveImg2" />
        <StyledImage className="wave-img" src={WaveImg3} alt="WaveImg3" />
        <StyledImage className="wave-img" src={WaveImg4} alt="WaveImg4" />
        <StyledImage
          className="wave-img"
          src={WaveImg5}
          alt="WaveImg5"
          id="shape"
        />
      </StyledInfoCard>
      <Stats pokemonInfo={pokemonInfo} />
    </StyledBackground>
  );
}
