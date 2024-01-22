import styled from "styled-components";
import { Theme } from "../../../utils/theme";
import { Sizes } from "../../../utils/types";

interface SelectProps {
  primary: boolean;
  size: Sizes;
  theme: Theme;
}

export const StyledSelect = styled.select<SelectProps>`
  color: ${(props: SelectProps) =>
    props.primary ? props.theme.text.main : props.theme.text.secondary};
  font-size: ${(props: SelectProps) => {
    switch (props.size) {
      case Sizes.EXTRASMALL:
        return props.theme.size.extrasmall;
      case Sizes.SMALL:
        return props.theme.size.small;
      case Sizes.MEDIUM:
        return props.theme.size.medium;
      case Sizes.LARGE:
        return props.theme.size.large;
      case Sizes.EXTRALARGE:
        return props.theme.size.extralarge;
    }
  }};
  margin-left: 8px;
  text-transform: capitalize;
`;
