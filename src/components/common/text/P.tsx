import styled from "styled-components";
import { Theme } from "../../../utils/theme";
import { Sizes } from "../../../utils/types";

interface PProps {
  primary?: boolean;
  size: Sizes;
  theme: Theme;
  margin?: string;
  bold?: boolean;
  uppercase?: boolean;
  isStat?: boolean;
}

export const StyledP = styled.p<PProps>`
  color: ${(props: PProps) =>
    props.primary ? props.theme.text.main : props.theme.text.secondary};
  font-size: ${(props: PProps) => {
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
  font-style: normal;
  font-weight: ${(props: PProps) => (props.bold ? 700 : 400)};
  line-height: 110%;
  letter-spacing: -0.15px;
  z-index: 1;
  text-transform: ${(props: PProps) =>
    props.uppercase ? "uppercase" : "capitalize"};

  ${(props: PProps) => props.margin !== undefined && `margin: ${props.margin};`}

  @media (max-width: 576px) {
    font-size: ${(props: PProps) => props.isStat? "0.75rem" : "1.25rem"};
  }
}
`;
