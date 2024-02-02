import PokemonType from "../type/PokemonType";

import { ColorType, PokemonCardProps, Sizes } from "../../../utils/types";

import { Link, useNavigate } from "react-router-dom";
import { StyledContainer } from "../../common/Container";
import { ColorTypes } from "../../../utils/constants";
import { StyledP } from "../../common/text/P";
import { StyledImage } from "../../common/Image";
import { StyledPokemonCard } from "./StyledPokemonCard";
import { StyledA } from "../../common/A";
import { StyledPokemonTypes } from "./StyledPokemonTypes";

export default function PokemonCard({
  id,
  types,
  name,
  img,
}: PokemonCardProps) {
  const navigate = useNavigate();
  const colorType: ColorType | undefined = ColorTypes.find(
    (item: ColorType) => item.type === types[0]
  );
  return (
    <StyledContainer>
      <StyledA
        className="pokemon-card-link"
        onClick={() => navigate(`/pokemon/${id}`)}
      >
        <StyledPokemonCard backgroundColor={colorType?.color}>
          <StyledImage
            width="70%"
            height="60%"
            src={img}
            alt={`Pokemon ${name}`}
          />
          <StyledP primary={true} size={Sizes.SMALL} margin="8px">
            {name}
          </StyledP>
          <StyledPokemonTypes>
            {types.map((type: string, index: number) => (
              <PokemonType type={type} key={index} />
            ))}
          </StyledPokemonTypes>
        </StyledPokemonCard>
      </StyledA>
    </StyledContainer>
  );
}
