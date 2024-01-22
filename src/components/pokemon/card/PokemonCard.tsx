import PokemonType from "../type/PokemonType";

import { ColorType, PokemonCardProps, Sizes } from "../../../utils/types";

import { Link } from "react-router-dom";
import { StyledContainer } from "../../common/Container";
import { ColorTypes } from "../../../utils/constants";
import { StyledP } from "../../common/text/P";
import { StyledImage } from "../../common/Image";
import { StyledPokemonCard } from "./StyledPokemonCard";

export default function PokemonCard({
  id,
  types,
  name,
  img,
}: PokemonCardProps) {
  const colorType: ColorType | undefined = ColorTypes.find(
    (item: ColorType) => item.type === types[0]
  );
  return (
    <StyledContainer>
      <Link className="pokemon-card-link" to={{ pathname: `/pokemon/${id}` }}>
        <StyledPokemonCard
          backgroundColor={colorType?.color}
        >
          <StyledImage
            width="70%"
            height="60%"
            src={img}
            alt={`Pokemon ${name}`}
          />
          <StyledP primary={true} size={Sizes.SMALL} margin="8px">
            {name}
          </StyledP>
          <StyledContainer
            display="flex"
            flexDirection="row"
            justify-Content="space-evenly"
            alignItems="center"
            textTransform="capitalize"
            gap="8px"
          >
            {types.map((type: string, index: number) => (
              <PokemonType type={type} key={index} />
            ))}
          </StyledContainer>
        </StyledPokemonCard>
      </Link>
    </StyledContainer>
  );
}
