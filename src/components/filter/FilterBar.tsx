import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import {
  ButtonType,
  FilterBarProps,
  Sizes,
} from "../../utils/types";
import { StyledFilterItem } from "./StyledFilterItem";
import { StyledFilterContainer } from "./StyledFilterContainer";
import { StyledP } from "../common/text/P";
import { StyledContainer } from "../common/Container";
import { StyledButton } from "../common/Button";
import { StyledSelect } from "../common/text/Select";
import { MAX_VALUE, MIN_VALUE } from "../../utils/constants";

function valuetext(value: number) {
  return `${value}kg`;
}

export default function FilterBar({
  handleFilters,
  colors,
  pokemonTypes,
}: FilterBarProps) {
  const [weight, setWeight] = useState<number[]>([MIN_VALUE, MAX_VALUE]);
  const [isBaby, setIsBaby] = useState<boolean>(false);
  const [color, setColor] = useState<string>("");
  const [types, setTypes] = useState<string[]>([]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setWeight(newValue as number[]);
  };

  return (
    <StyledFilterContainer>
      <StyledFilterItem>
        <StyledP primary={false} size={Sizes.SMALL}>
          Baby
          <input
            type="checkbox"
            name="isBaby"
            onChange={(e) => setIsBaby(e.target.checked)}
          />
        </StyledP>
      </StyledFilterItem>
      <StyledFilterItem>
        <StyledP primary={false} size={Sizes.SMALL}>
          Colors
        </StyledP>
        <StyledSelect
          onChange={(e) => {
            setColor(e.target.value);
          }}
          name="colors"
          primary={true}
          size={Sizes.EXTRASMALL}
        >
          <option value="">All</option>
          {colors.map((color: string) => (
            <option key={color}>{color}</option>
          ))}
        </StyledSelect>
      </StyledFilterItem>
      <StyledFilterItem>
        <Box className="box-item" sx={{ width: 200 }}>
          <StyledContainer
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
          >
            <StyledP primary={false} size={Sizes.SMALL}>
              {MIN_VALUE}kg
            </StyledP>
            <StyledP primary={false} size={Sizes.MEDIUM}>
              Weight
            </StyledP>
            <StyledP primary={false} size={Sizes.SMALL}>
              {MAX_VALUE}kg
            </StyledP>
          </StyledContainer>
          <Slider
            min={MIN_VALUE}
            max={MAX_VALUE}
            getAriaLabel={() => "Weight range"}
            value={weight}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            size="small"
            disableSwap
            color="error"
          />
        </Box>
      </StyledFilterItem>
      <StyledFilterItem>
        <StyledP primary={false} size={Sizes.SMALL}>
          Types
        </StyledP>
        <StyledSelect
          onChange={(e) => {
            setTypes(
              Array.from(e.target.options)
                .filter((o) => o.selected)
                .map((o) => o.value)
            );
          }}
          multiple
          name="types"
          primary={true}
          size={Sizes.EXTRASMALL}
        >
          <option value="">All</option>
          {pokemonTypes.map((type: string) => (
            <option key={type}>{type}</option>
          ))}
        </StyledSelect>
      </StyledFilterItem>
      <StyledButton
        type="submit"
        buttonType={ButtonType.APPLYFILTER}
        size={Sizes.MEDIUM}
        onClick={() => handleFilters({ isBaby, color, weight, types })}
      >
        Apply
      </StyledButton>
    </StyledFilterContainer>
  );
}
