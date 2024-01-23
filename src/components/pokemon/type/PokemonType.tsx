import { ColorTypes } from "../../../utils/constants";
import { LightTheme } from "../../../utils/theme";
import { ColorType, PokemonTypeProps, Sizes } from "../../../utils/types";
import { StyledContainer } from "../../common/Container";
import { StyledP } from "../../common/text/P";
import { StyledPokemonType } from "./StyledPokemonType";

export default function PokemonType({ type }: PokemonTypeProps) {
  const colorType: ColorType | undefined = ColorTypes.find(
    (item: ColorType) => item.type === type
  );

  return (
    <StyledPokemonType backgroundColor={colorType?.color}>
      <StyledP primary={false} size={Sizes.SMALL}>
        {type}
      </StyledP>
    </StyledPokemonType>
  );
}
