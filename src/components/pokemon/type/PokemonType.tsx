import { ColorTypes } from "../../../utils/constants";
import { LightTheme } from "../../../utils/theme";
import { ColorType, PokemonTypeProps, Sizes } from "../../../utils/types";
import { StyledContainer } from "../../common/Container";
import { StyledP } from "../../common/text/P";

export default function PokemonType({ type }: PokemonTypeProps) {
  const colorType: ColorType | undefined = ColorTypes.find(
    (item: ColorType) => item.type === type
  );

  return (
    <StyledContainer
      borderRadius="64px"
      outline="auto"
      outlineColor={LightTheme.outline?.black}
      padding="4px"
      backgroundColor={colorType?.color}
    >
      <StyledP primary={false} size={Sizes.SMALL}>
        {type}
      </StyledP>
    </StyledContainer>
  );
}
